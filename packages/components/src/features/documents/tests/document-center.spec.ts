import { test, expect, Page } from "@playwright/test";

const DOCUMENT_CENTER_PATH = "/de/en/about-us/tools-services/document-center";

async function acceptCookies(page: Page) {
  const cookieBtn = page.locator("#cmpwelcomebtnyes a, .cmptxt_btn_yes");
  if (await cookieBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
    await cookieBtn.click();
  }
}

test.describe("Document Center block", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(DOCUMENT_CENTER_PATH);
    await acceptCookies(page);
  });

  test("document center exists and displays results", async ({ page }) => {
    const documentCenter = page.getByRole("search").filter({ has: page.getByRole("article") });
    await expect(documentCenter).toBeVisible();

    const items = page.getByRole("article");
    await expect(items).toHaveCount(12);
  });

  test("document center displays results count", async ({ page }) => {
    const resultsCount = page.getByText(/\d+\s*results/);
    await expect(resultsCount).toBeVisible();
  });

  test("document center has search input", async ({ page }) => {
    const searchInput = page.getByRole("searchbox");
    await expect(searchInput).toBeVisible();
  });

  test("document center filters results based on search input", async ({ page }) => {
    const documentCenter = page.getByRole("search").filter({ has: page.getByRole("article") });
    await expect(documentCenter).toBeVisible();

    const resultsCountText = await page.getByText(/\d+\s*results/).textContent();
    const initialCount = parseInt(resultsCountText?.match(/\d+/)?.[0] || "0", 10);
    await expect(initialCount).toBeGreaterThan(0);

    const searchInput = page.getByRole("searchbox");
    await searchInput.fill("test");

    await page.waitForTimeout(300);

    const filteredCountText = await page.getByText(/\d+\s*results/).textContent();
    const filteredCount = parseInt(filteredCountText?.match(/\d+/)?.[0] || "0", 10);
    expect(filteredCount).toBeLessThanOrEqual(initialCount);
  });

  test("document center has categories filter", async ({ page }) => {
    const categoriesFilter = page.getByRole("button", { name: /Categories/i });
    await expect(categoriesFilter.first()).toBeVisible();
  });

  test("document center has language filter", async ({ page }) => {
    const languageFilter = page.getByRole("button", { name: /Language/i });
    await expect(languageFilter.first()).toBeVisible();
  });

  test("categories filter dropdown opens and shows options", async ({ page }) => {
    const categoriesFilter = page.getByRole("button", { name: /Categories/i }).first();
    await categoriesFilter.click();

    const menuContent = page.getByRole("menu");
    await expect(menuContent).toBeVisible();

    const checkboxItems = page.getByRole("menuitemcheckbox");
    await expect(checkboxItems.first()).toBeVisible();
  });

  test("filter options show facet counts", async ({ page }) => {
    const categoriesFilter = page.getByRole("button", { name: /Categories/i }).first();
    await categoriesFilter.click();

    const optionWithCount = page.getByRole("menuitemcheckbox").filter({ hasText: /\(\d+\)/ });
    await expect(optionWithCount.first()).toBeVisible();
  });

  test("document center has sort dropdown", async ({ page }) => {
    const sortButton = page.getByRole("button", { name: /Sort by/i });
    await expect(sortButton).toBeVisible();
  });

  test("sort dropdown opens and shows options", async ({ page }) => {
    const sortButton = page.getByRole("button", { name: /Sort by/i });
    await sortButton.click();

    const menuContent = page.getByRole("menu");
    await expect(menuContent).toBeVisible();

    const sortOptions = page.getByRole("menuitemcheckbox");
    await expect(sortOptions.first()).toBeVisible();
  });

  test("document teasers have titles", async ({ page }) => {
    const firstTeaser = page.getByRole("article").first();
    await expect(firstTeaser).toBeVisible();

    const title = firstTeaser.getByRole("heading");
    await expect(title).toBeVisible();
  });

  test("document teasers have links for the document", async ({ page }) => {
    const documentCenter = page.getByRole("search").filter({ has: page.getByRole("article") });
    await expect(documentCenter).toBeVisible();

    const firstTeaser = documentCenter.getByRole("article").first();
    const links = await firstTeaser.getByRole("link").count();

    await expect(links).toBe(2);
  });

  test("load more button visible when more results available and clicking loads more", async ({
    page,
  }) => {
    const resultsCount = page.getByText(/\d+\s*results/);
    const countText = await resultsCount.textContent();
    const totalResults = parseInt(countText?.match(/\d+/)?.[0] || "0");

    if (totalResults > 12) {
      const loadMoreButton = page.getByRole("button", { name: /See more/i });
      await expect(loadMoreButton).toBeVisible();

      await loadMoreButton.click();

      await page.waitForTimeout(100);

      const itemsAfterLoadMore = page.getByRole("article");
      const newCount = await itemsAfterLoadMore.count();
      await expect(newCount).toBeGreaterThan(12);
    }
  });
});
