import { test, expect, Page } from "@playwright/test";

const TEST_PAGE_PATH = "/global/en";
const US_PAGE_PATH = "/us/en";

async function acceptCookies(page: Page) {
  const cookieBtn = page.locator("#cmpwelcomebtnyes a, .cmptxt_btn_yes");
  if (await cookieBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
    await cookieBtn.click();
  }
}

async function clearStorage(page: Page) {
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
}

async function setPreferredLocale(page: Page, locale: string) {
  await page.evaluate((localeValue) => {
    localStorage.setItem("__conti-preferred-locale", JSON.stringify(localeValue));
  }, locale);
}

async function setBrowserLanguages(page: Page, languages: string[]) {
  await page.addInitScript((langs) => {
    Object.defineProperty(navigator, "languages", {
      get: () => langs,
      configurable: true,
    });
    Object.defineProperty(navigator, "language", {
      get: () => langs[0],
      configurable: true,
    });
  }, languages);
}

test.describe("Country Notice Banner", () => {
  test.afterEach(async ({ page }) => {
    await clearStorage(page);
  });

  test("banner is visible when no preferred locale is set", async ({ page }) => {
    await page.goto(TEST_PAGE_PATH);
    await acceptCookies(page);

    const banner = page
      .locator('section[role="region"]')
      .filter({ hasText: "You are currently on our" });
    await expect(banner).toBeVisible();
  });

  test("banner shows current locale in message", async ({ page }) => {
    await page.goto(TEST_PAGE_PATH);
    await acceptCookies(page);

    const banner = page.locator('section[role="region"]').filter({ hasText: "Global (English)" });
    await expect(banner).toBeVisible();
  });

  test("banner has dropdown with country selection", async ({ page }) => {
    await page.goto(TEST_PAGE_PATH);
    await acceptCookies(page);

    const dropdownTrigger = page.locator('button[aria-haspopup="menu"]');
    await expect(dropdownTrigger).toBeVisible();

    await dropdownTrigger.click();

    const dropdownContent = page.locator('[role="menu"]');
    await expect(dropdownContent).toBeVisible();
  });

  test("banner has Continue button", async ({ page }) => {
    await page.goto(TEST_PAGE_PATH);
    await acceptCookies(page);

    const continueButton = page.locator("button").filter({ hasText: "Continue" });
    await expect(continueButton).toBeVisible();
  });

  test("banner has close button", async ({ page }) => {
    await page.goto(TEST_PAGE_PATH);
    await acceptCookies(page);

    const closeButton = page.locator('button[aria-label="Dismiss notice"]').nth(1);
    await expect(closeButton).toBeVisible();
  });

  test("clicking close button dismisses banner for session", async ({ page }) => {
    await page.goto(TEST_PAGE_PATH);
    await acceptCookies(page);

    const banner = page
      .locator('section[role="region"]')
      .filter({ hasText: "You are currently on our" });
    await expect(banner).toBeVisible();

    const closeButton = page.locator('button[aria-label="Dismiss notice"]').nth(1);
    await closeButton.click();

    await expect(banner).not.toBeVisible();

    await page.reload();
    await acceptCookies(page);

    await expect(banner).not.toBeVisible();
  });

  test("clicking Continue saves current locale as preference", async ({ page }) => {
    await page.goto(TEST_PAGE_PATH);
    await acceptCookies(page);

    const continueButton = page.locator("button").filter({ hasText: "Continue" });
    await continueButton.click();

    await page.waitForTimeout(500);

    const storedLocale = await page.evaluate(() => {
      return localStorage.getItem("__conti-preferred-locale");
    });

    expect(storedLocale).toBe('"global/en"');
  });

  test("banner does not show when on preferred locale", async ({ page }) => {
    await page.goto(TEST_PAGE_PATH);
    await setPreferredLocale(page, "global/en");
    await acceptCookies(page);

    const banner = page
      .getByLabel('section[role="region"]')
      .filter({ hasText: "You are currently on our" });
    await expect(banner).not.toBeVisible();
  });

  test("banner shows when on different locale than preferred", async ({ page }) => {
    await page.goto(TEST_PAGE_PATH);
    await setPreferredLocale(page, "us/en");
    await acceptCookies(page);

    const banner = page
      .locator('section[role="region"]')
      .filter({ hasText: "You are currently on our" });
    await expect(banner).toBeVisible();
  });

  test("dropdown shows grouped locales", async ({ page }) => {
    await page.goto(TEST_PAGE_PATH);
    await acceptCookies(page);

    const dropdownTrigger = page.locator('button[aria-haspopup="menu"]');
    await dropdownTrigger.click();

    const groupLabel = page.locator('[role="group"]').first();
    await expect(groupLabel).toBeVisible();
  });

  test("selecting locale in dropdown updates trigger but does not navigate", async ({ page }) => {
    await page.goto(TEST_PAGE_PATH);
    await acceptCookies(page);

    const dropdownTrigger = page.locator('button[aria-haspopup="menu"]');
    await dropdownTrigger.click();

    const usOption = page
      .locator('[role="menuitem"]')
      .filter({ hasText: /NorthAmerica/ })
      .first();
    await usOption.click();
    expect(page.url()).toContain("/global/en");

    await dropdownTrigger.click();
    const updatedTrigger = page.locator("button").filter({ hasText: /NorthAmerica/ });
    await expect(updatedTrigger).toBeVisible();
  });

  test("selecting locale and clicking Continue navigates and saves preference", async ({
    page,
  }) => {
    await page.goto(TEST_PAGE_PATH);
    await acceptCookies(page);

    const dropdownTrigger = page.locator('button[aria-haspopup="menu"]');
    await dropdownTrigger.click();

    const usOption = page
      .locator('[role="menuitem"]')
      .filter({ hasText: /NorthAmerica/ })
      .first();
    await usOption.click();

    const continueButton = page.locator("button").filter({ hasText: "Continue" });
    await continueButton.click();

    await page.waitForURL("**/us/en**");

    expect(page.url()).toContain("/us/en");

    const storedLocale = await page.evaluate(() => {
      return localStorage.getItem("__conti-preferred-locale");
    });

    expect(storedLocale).toBe('"us/en"');
  });

  test("infers locale from browser language - exact match", async ({ page }) => {
    await setBrowserLanguages(page, ["en-US", "en"]);
    await page.goto(TEST_PAGE_PATH);
    await acceptCookies(page);

    const dropdownTrigger = page.locator("button").filter({ hasText: /NorthAmerica.*English/ });
    await expect(dropdownTrigger).toBeVisible();
  });

  test("infers locale from browser language - language only match", async ({ page }) => {
    await setBrowserLanguages(page, ["de", "en"]);
    await page.goto(TEST_PAGE_PATH);
    await acceptCookies(page);

    const banner = page
      .locator('section[role="region"]')
      .filter({ hasText: "You are currently on our" });
    await expect(banner).toBeVisible();

    const dropdownTrigger = page.locator("button").filter({ hasText: /Germany.*English/ });
    await expect(dropdownTrigger).toBeVisible();
  });

  test("infers locale from browser language - country match fallback", async ({ page }) => {
    await setBrowserLanguages(page, ["de-AT", "en"]);
    await page.goto(TEST_PAGE_PATH);
    await acceptCookies(page);

    const dropdownTrigger = page.locator("button").filter({ hasText: /Austria/ });
    await expect(dropdownTrigger).toBeVisible();
  });

  test("banner has proper ARIA labels", async ({ page }) => {
    await page.goto(TEST_PAGE_PATH);
    await acceptCookies(page);

    const region = page.locator('section[role="region"]');
    await expect(region).toHaveAttribute("aria-labelledby");

    const closeButton = page.locator('button[aria-label="Dismiss notice"]').nth(1);
    await expect(closeButton).toBeVisible();
  });

  test("banner persists dismissal in sessionStorage", async ({ page }) => {
    await page.goto(TEST_PAGE_PATH);
    await acceptCookies(page);

    const closeButton = page.locator('button[aria-label="Dismiss notice"]').nth(1);
    await closeButton.click();

    await page.waitForFunction(() => {
      return sessionStorage.getItem("__conti-notice-banner-dismissed") !== null;
    });

    const sessionValue = await page.evaluate(() =>
      sessionStorage.getItem("__conti-notice-banner-dismissed"),
    );
    expect(sessionValue).toBeTruthy();
  });

  test("multiple browser languages prioritize correctly", async ({ page }) => {
    await setBrowserLanguages(page, ["de-DE", "de", "en-US", "en"]);
    await page.goto(US_PAGE_PATH);
    await acceptCookies(page);

    const banner = page
      .locator('section[role="region"]')
      .filter({ hasText: "You are currently on our" });
    await expect(banner).toBeVisible();

    const dropdownTrigger = page.locator("button").filter({ hasText: "Germany" });
    await expect(dropdownTrigger).toBeVisible();
  });
});
