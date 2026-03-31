/* eslint-disable import/no-unresolved */
import {Queue} from 'https://da.live/nx/public/utils/tree.js';
import {addDnt, removeDnt} from 'https://da.live/nx/blocks/loc/dnt/dnt.js';

const AEM_ORIGIN = 'https://admin.hlx.page';
const DA_ORIGIN = 'https://admin.da.live';
const LANG_CONF_V2 = '/.da/translate-v2.json';
const LANG_CONF_V1 = '/.da/translate.json';

export const [setContext, getContext] = (() => {
  let ctx;
  return [
    (supplied) => {
      ctx = (() => {
        const {
          org, repo: site, path, token,
        } = supplied;
        return {
          org, site, path, token,
        };
      })();
      return ctx;
    },
    () => ctx,
  ];
})();

export async function fetchDAPage(org, site, path) {
  const { token } = getContext();
  const opts = { headers: { Authorization: `Bearer ${token}` } };
  const resp = await fetch(`${DA_ORIGIN}/source/${org}/${site}${path}.html`, opts);
  return resp.status === 200;
}

export async function postDAVersionSource(daPath) {
  const { token } = getContext();
  const opts = { headers: { Authorization: `Bearer ${token}` } };
  const resp = await fetch(`${DA_ORIGIN}/versionsource${daPath}`, opts);
  return resp.status === 200;
}

export async function getSourceContent(srcPath) {
  const { token, org, site } = getContext();


  try {
    const opts = { headers: { Authorization: `Bearer ${token}` } };
    const source = await fetch(`${DA_ORIGIN}/source${srcPath}.html`, opts);

    if (!source.ok) {
      return null;
    }
    const text = await source.text();

    const configSource = await fetch(`${DA_ORIGIN}/source/${org}/${site}${LANG_CONF_V1}`, opts);
    const config = await configSource.json()

    return await addDnt(text, config, { fileType: 'html' });
  } catch {
    return null;
  }
}

async function saveVersion(path, label) {
  const opts = { method: 'POST' };
  if (label) {
    opts.body = JSON.stringify({ label });
  }

  return await postDAVersionSource(path);
}

export async function saveDAPage(url) {
  const { token } = getContext();

  const type = url.destination.includes('.json') ? 'application/json' : 'text/html';
  const blob = new Blob([url.sourceContent], { type });
  const opts = {
    method: 'POST',
    body: new FormData(),
    headers: { Authorization: `Bearer ${token}` }
  };
  opts.body.append('data', blob);
  const resp = await fetch(`${DA_ORIGIN}/source${url.destination}`, opts);
  if (!resp?.ok) {
    url.status = 'error';
    return null;
  }

  url.status = 'success';
  // Don't wait for the version save
  saveVersion(url.destination, `${url.destination} - Rolled Out`);
  return resp;
}

async function fetchAEMStatus(org, site, aemPath) {
  const { token } = getContext();
  const opts = { headers: { Authorization: `Bearer ${token}` } };
  const statusUrl = `${AEM_ORIGIN}/status/${org}/${site}/main${aemPath}`;
  try {
    const res = await fetch(statusUrl, opts);
    if (!res.ok) { throw new Error(res.status); }
    const data = await res.json();
    return { preview: data.preview, live: data.live };
  } catch {
    return null;
  }
}

export async function getLangsAndLocales(path) {
  const { org, site, token } = getContext();
  const opts = { headers: { Authorization: `Bearer ${token}` } };

  const params = new URLSearchParams(window.location.search);
  const globalConfig = params.get('global');
  const configSource = globalConfig || `/${org}/${site}`;
  const resp = await fetch(`${DA_ORIGIN}/source${configSource}${LANG_CONF_V2}`, opts);
  if (!resp.ok) { return { message: { text: 'There was an error fetching languages.', type: 'error' } }; }
  const sheet = await resp.json();
  const { data: langData } = sheet.languages;
  const { data: localeData } = sheet.locales;

  const langs = langData.map((row) => {
    const suffix = path
        ? path.split('/').slice(row.location.length).join('/')
        : '';

    const localesField = row.locales || '';
    const localesList = localesField
        .split(',')
        .map(s => s.trim())
        .filter(Boolean)
        .map(s => s.toLowerCase());

    return {
      code: row.code,
      name: row.name,
      location: row.location,
      site: row.site ? row.site.replace(/^\//, '') : site,
      pagePath: suffix
          ? `${row.location}/${suffix}`
          : row.location,
      status: false,
      localesField,
      localesList,
    }
  });

  const locales = localeData.map((row) => {

    const localeLangs = langs
        .filter((lang) => {
          if (!lang.localesField) { return true; }
          const candidate = row.location ? `${row.location}/${lang.code}` : lang.code;
          return lang.localesList.includes(candidate.toLowerCase());
        })
        .map((lang) => {
      const suffix = path ?
          path.split('/').slice(row.location.length).join('/') :
          '';


      const localeLang = {
        name: lang.name,
        site: row.site ? row.site.replace(/^\//, '') : site,
        globalLocation: lang.location,
        location: row.location ? `${row.location}/${lang.code}` : lang.location,
        status: false,
      };
      localeLang.pagePath = row.location ?
          suffix ?
              `${row.location}/${lang.code}/${suffix}` :
              `${row.location}/${lang.code}` :
          lang.location;
      return localeLang;
    });

    return {
      ...row,
      langs: localeLangs,
    };
  });

  return { langs, locales };
}

export async function populatePageData(langs, locales) {
  const { org } = getContext();

  const updatedLangs = await Promise.all(langs.map(async (lang) => {
    const exists = await fetchDAPage(org, lang.site, lang.pagePath);
    const aemStatus = exists
        ? await fetchAEMStatus(org, lang.site, lang.pagePath)
        : null;

    return {
      ...lang,
      status: true,
      exists,
      aemStatus,
    };
  }));

  const updatedLocales = await Promise.all(locales.map(async (row) => {
    const localeLangs = await Promise.all(row.langs.map(async (localeLang) => {
      const exists = await fetchDAPage(org, localeLang.site, localeLang.pagePath);
      const aemStatus = exists
          ? await fetchAEMStatus(org, localeLang.site, localeLang.pagePath)
          : null;

      return {
        ...localeLang,
        status: true,
        exists,
        aemStatus,
      };
    }));

    return {
      ...row,
      langs: localeLangs,
    };
  }));

  return { langs: updatedLangs, locales: updatedLocales };
}

export async function copyPage(sourcePath, destPath) {
  const { token } = getContext();
  const body = new FormData();
  body.append('destination', `${destPath}.html`);
  const opts = { method: 'POST', body, headers: { Authorization: `Bearer ${token}` } };
  await fetch(`${DA_ORIGIN}/copy${sourcePath}.html`, opts);
}

async function sendForTranslation(org, site, url) {
  const body = new FormData();
  body.append('data', url.content);
  body.append('fromlang', url.from);
  body.append('tolang', url.code);

  const opts = { method: 'POST', body };

  const resp = await fetch('https://translate.da.live/google', opts);
  if (!resp.ok) { return; }

  const { translated: html } = await resp.json();
  if (html) {
    url.sourceContent = await removeDnt({ html, org, site, ext: url.ext });
    url.destination = `/${org}/${site}/${url.daDestPath}.html`;
  }
  return url;
}

export async function translatePage(sourcePath, destPath) {
  const { org, site } = getContext();
  const sourceParts = sourcePath.split('/')
  const destParts = destPath.split('/')

  const daDestPath = destParts.slice(3).join('/')
  const content = await getSourceContent(sourcePath)

  const translation = await sendForTranslation(
      org,
      site,
      {
        daDestPath,
        content,
        from: sourceParts[4],
        code: destParts[4],
      })

  return saveDAPage(translation)
}

export async function publishPages(pages) {
  console.log('Publishing pages', pages);
  const { token } = getContext();
  const opts = { method: 'POST', headers: { Authorization: `Bearer ${token}` } };

  const publish = async (url) => {
    let resp = await fetch(`${AEM_ORIGIN}/preview${url.path}`, opts);
    if (resp.status === 200) {
      resp = await fetch(`${AEM_ORIGIN}/live${url.path}`, opts);
    }
    url.status = resp.status;
    url.resp = await resp.json();
  };

  const queue = new Queue(publish, 5);

  return new Promise((resolve) => {
    const throttle = setInterval(() => {
      const nextUrl = pages.find((url) => !url.inProgress);
      if (nextUrl) {
        nextUrl.inProgress = true;
        queue.push(nextUrl);
      } else {
        const finished = pages.every((url) => url.status);
        if (finished) {
          clearInterval(throttle);
          resolve(pages);
        }
      }
    }, 250);
  });
}
