import { test, expect, Page } from "@playwright/test";

const GLOBAL_GRID_PAGE_PATH = "/global/en/press/newsroom";
const DE_GRID_PAGE_PATH = "/de/en/press/newsroom";
const US_GRID_PAGE_PATH = "/us/en/press/newsroom";

// -----------------------------
// Helpers
// -----------------------------
async function acceptCookies(page: Page) {
  const cookieBtn = page.locator("#cmpwelcomebtnyes a, .cmptxt_btn_yes");
  if (await cookieBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
    await cookieBtn.click();
  }
}

// -----------------------------
// Tests
// -----------------------------
test.describe("Results Grid block", () => {
  test("results grid exists and has 12 elements", async ({ page }) => {
    await page.goto(GLOBAL_GRID_PAGE_PATH);
    await acceptCookies(page);

    const grid = page.locator(".results-grid");
    await expect(grid).toBeVisible();

    const items = grid.locator("article");
    await expect(items).toHaveCount(12);
  });

  test("results grid facets have count number after the label", async ({ page }) => {
    await page.goto(GLOBAL_GRID_PAGE_PATH);
    await acceptCookies(page);

    const grid = page.locator(".results-grid");
    await expect(grid).toBeVisible();

    // Open the year dropdown
    const yearDropdown = grid.locator("button", {
      hasText: "Add Year",
      has: page.locator(":visible"),
    });
    await yearDropdown.click();

    // Look for a checkbox item that has a count number after the label
    const yearOption = page.getByRole("menuitemcheckbox", { name: /2025\s*\(\d+\)/ });
    await expect(yearOption).toBeVisible();
    // Close the year dropdown
    await yearOption.click();
    await page.getByRole("button", { name: "Save" }).click();

    // Open the category dropdown
    const categoryDropdown = grid.locator("button", {
      hasText: "Add Filter",
      has: page.locator(":visible"),
    });
    await categoryDropdown.click();

    // Look for a checkbox item that has a count number after the label
    const categoryOption = page.getByRole("menuitemcheckbox", { name: /Press Release\s*\(\d+\)/ });
    await expect(categoryOption).toBeVisible();
  });

  test("results grid has hidden year filter", async ({ page }) => {
    await page.goto(DE_GRID_PAGE_PATH);
    await acceptCookies(page);

    const grid = page.locator(".results-grid");
    await expect(grid).toBeVisible();

    const yearButton = grid.getByRole("button", { name: "Choose Year" });
    await expect(yearButton).toHaveCount(0);
  });

  test("results grid has editable labels for the filter labels", async ({ page }) => {
    await page.goto(DE_GRID_PAGE_PATH);
    await acceptCookies(page);

    const grid = page.locator(".results-grid");
    await expect(grid).toBeVisible();

    const chooseCategoryButton = grid.locator("button", { hasText: "Choose Category" });
    await expect(chooseCategoryButton).toHaveCount(2);

    const visibleCategoryButton = await chooseCategoryButton
      .filter({ has: page.locator(":visible") })
      .count();
    expect(visibleCategoryButton).toBe(1);
  });

  test("results grid has a search input and filters results baed on the text", async ({ page }) => {
    await page.goto(DE_GRID_PAGE_PATH);
    await acceptCookies(page);

    const grid = page.locator(".results-grid");
    await expect(grid).toBeVisible();
    let items = grid.locator("article");
    await expect(items).toHaveCount(12);

    const searchInput = grid.locator('input[placeholder="Suche..."]');
    await expect(searchInput).toBeVisible();

    await searchInput.fill("hoses");

    items = grid.locator("article");
    await expect(items).toHaveCount(5);
  });

  test("results grid has a search input can be hidden", async ({ page }) => {
    await page.goto(US_GRID_PAGE_PATH);
    await acceptCookies(page);

    const grid = page.locator(".results-grid");
    await expect(grid).toBeVisible();

    const searchInput = grid.locator('input[placeholder="Find..."]');
    await expect(searchInput).not.toBeVisible();
  });
});
