/**
 * Fragment Block
 * Fetches a remote page fragment and renders it inline, fully decorated.
 * https://www.aem.live/developer/block-collection/fragment
 */

// EDS runtime scripts are external to the Vite bundle (matched by /\/scripts\/.*/)
// eslint-disable-next-line import/no-cycle
// @ts-ignore – no type declarations for EDS runtime
import { decorateMain } from "@scripts/scripts.js";
// @ts-ignore – no type declarations for EDS runtime
import { loadSections } from "@scripts/aem.js";

/**
 * Loads and fully decorates a fragment from the given path.
 * @param path Absolute path to the fragment (must start with `/`)
 * @returns The decorated `<main>` element, or null if loading failed
 */
export async function loadFragment(path: string): Promise<HTMLElement | null> {
  if (!path || !path.startsWith("/") || path.startsWith("//")) return null;

  const resp = await fetch(`${path}.plain.html`);
  if (!resp.ok) return null;

  const main = document.createElement("main");
  main.innerHTML = await resp.text();

  // Rebase relative media URLs to the fragment's origin path
  const resetAttributeBase = (tag: string, attr: string) => {
    main.querySelectorAll<HTMLElement>(`${tag}[${attr}^="./media_"]`).forEach((el) => {
      (el as any)[attr] = new URL(
        el.getAttribute(attr)!,
        new URL(path, window.location.href),
      ).href;
    });
  };
  resetAttributeBase("img", "src");
  resetAttributeBase("source", "srcset");

  decorateMain(main);
  await loadSections(main);

  return main;
}

export default async function decorate(block: HTMLElement): Promise<void> {
  const link = block.querySelector("a");
  const path = link ? link.getAttribute("href") : block.textContent?.trim();
  if (!path) return;

  const fragment = await loadFragment(path);
  if (fragment) block.replaceChildren(...fragment.childNodes);
}

