import { test, expect, Page } from "@playwright/test";

const DOCUMENT_CENTER_PATH = "/de/en/about-us/tools-services/document-center";

async function acceptCookies(page: Page) {
  const cookieBtn = page.locator("#cmpwelcomebtnyes a, .cmptxt_btn_yes");
  if (await cookieBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
    await cookieBtn.click();
  }
}

test.describe("Download dialog", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(DOCUMENT_CENTER_PATH);
    await acceptCookies(page);
  });

  test("single document download opens consent dialog", async ({ page }) => {
    const firstTeaser = page.getByRole("article").first();
    await expect(firstTeaser).toBeVisible();

    const documentLink = firstTeaser.getByRole("link").first();
    await documentLink.click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog.getByText(/Download Conditions|Disclaimer/i)).toBeVisible();
  });

  test("download action stays disabled until consent is checked", async ({ page }) => {
    const firstTeaser = page.getByRole("article").first();
    await expect(firstTeaser).toBeVisible();

    await firstTeaser.getByRole("link").first().click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();

    const downloadLink = dialog.getByRole("link", { name: /Download/i });
    await expect(downloadLink).toHaveAttribute("aria-disabled", "true");

    const consentCheckbox = dialog.getByRole("checkbox").first();
    await consentCheckbox.click();

    await expect(downloadLink).toHaveAttribute("aria-disabled", "false");
  });
});
