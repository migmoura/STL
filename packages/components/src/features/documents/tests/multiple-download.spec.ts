import { test, expect, Page } from "@playwright/test";

const DOCUMENT_CENTER_PATH = "/de/en/about-us/tools-services/document-center";

async function acceptCookies(page: Page) {
  const cookieBtn = page.locator("#cmpwelcomebtnyes a, .cmptxt_btn_yes");
  if (await cookieBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
    await cookieBtn.click();
  }
}

test.describe("Multiple download", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(DOCUMENT_CENTER_PATH);
    await acceptCookies(page);
  });

  test("download all is disabled until a selection is made", async ({ page }) => {
    const downloadAllButton = page.getByRole("button", { name: /Download All/i });
    await expect(downloadAllButton).toBeVisible();
    await expect(downloadAllButton).toBeDisabled();

    const firstCheckbox = page.getByRole("article").first().getByRole("checkbox");
    await firstCheckbox.click();

    await expect(downloadAllButton).toBeEnabled();
  });

  test("download all opens consent dialog after selecting multiple items", async ({ page }) => {
    const articles = page.getByRole("article");
    await articles.nth(0).getByRole("checkbox").click();
    await articles.nth(1).getByRole("checkbox").click();

    const downloadAllButton = page.getByRole("button", { name: /Download All/i });
    await downloadAllButton.click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
  });

  test("reset button clears selection and disables download all", async ({ page }) => {
    const articles = page.getByRole("article");
    await articles.nth(0).getByRole("checkbox").click();
    await articles.nth(1).getByRole("checkbox").click();

    const downloadAllButton = page.getByRole("button", { name: /Download All/i });
    await expect(downloadAllButton).toBeVisible();

    const resetButton = page.getByRole("button", { name: "Clear selected documents" });
    await expect(resetButton).toBeVisible();

    await resetButton.click();
    await expect(downloadAllButton).toBeDisabled();
  });
});
