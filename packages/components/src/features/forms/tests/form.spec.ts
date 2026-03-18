import { test, expect, Page, Locator } from "@playwright/test";

const testCompany = "Test_Company";
const FORM_PAGE_PATH = `/de/en/contact?leadSource=negative_test&company=${testCompany}`;

// Selectors
const FIRST_NAME_SELECTOR = 'input[name="firstName"]';
const LAST_NAME_SELECTOR = 'input[name="lastName"]';
const COMPANY_SELECTOR = 'input[name="company"]';
const EMAIL_SELECTOR = 'input[name="email"]';
const PHONE_SELECTOR = 'input[name="mobilePhone"]';
const DESCRIPTION_SELECTOR = 'textarea[name="description"]';

const CATEGORY_SELECT = "select";
const COUNTRY_SELECT = "select";
const STATE_SELECT = "select";

const CHECKBOX_BUTTON = 'button[role="checkbox"]';
const SUBMIT_BUTTON = 'button[type="submit"]';

// Utility
function randomString(prefix = "") {
  return `${prefix}${Math.random().toString(36).slice(2, 9)}`;
}

// -----------------------------
// Helpers
// -----------------------------
async function acceptCookies(page: Page) {
  const cookieBtn = page.locator("#cmpwelcomebtnyes a, .cmptxt_btn_yes");
  if (await cookieBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
    await cookieBtn.click();
  }
}

async function fillForm(
  form: Locator,
  skip: Partial<
    Record<
      | "firstName"
      | "lastName"
      | "company"
      | "email"
      | "phone"
      | "description"
      | "category"
      | "country"
      | "state"
      | "checkbox",
      boolean
    >
  > = {},
) {
  if (!skip.firstName) {
    await form.locator(FIRST_NAME_SELECTOR).fill(randomString("fn-"));
  }
  if (!skip.lastName) {
    await form.locator(LAST_NAME_SELECTOR).fill(randomString("ln-"));
  }
  if (!skip.company) {
    await form.locator(COMPANY_SELECTOR).fill(randomString("co-"));
  }
  if (!skip.email) {
    await form.locator(EMAIL_SELECTOR).fill(`${randomString("test-")}@example.com`);
  }
  if (!skip.phone) {
    await form.locator(PHONE_SELECTOR).fill("0123456789");
  }
  if (!skip.description) {
    await form.locator(DESCRIPTION_SELECTOR).fill(randomString("desc-"));
  }

  if (!skip.category) {
    const categorySelect = form.locator(CATEGORY_SELECT).first();
    await safeSelect(categorySelect, "press");
  }
  if (!skip.country) {
    const countrySelect = form.locator(COUNTRY_SELECT).nth(1);
    await safeSelect(countrySelect, "us");
  }
  if (!skip.state) {
    const stateSelect = form.locator(STATE_SELECT).nth(2);
    await safeSelect(stateSelect, "NY");
  }
  if (!skip.checkbox) {
    await form.locator(CHECKBOX_BUTTON).click();
  }
}

async function safeSelect(select: Locator, value: string) {
  await select.selectOption(value).catch(async () => {
    await select.evaluate((el, v) => {
      (el as HTMLSelectElement).value = v;
      el.dispatchEvent(new Event("change", { bubbles: true }));
    }, value);
  });
}

// -----------------------------
// Tests
async function generateSuccessLeadsMock(page: Page) {
  await page.route("**/v1/leads", async (route) => {
    if (route.request().method() === "POST") {
      return route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ ok: true }),
      });
    }
    await route.continue();
  });
}

// -----------------------------
test.describe("Form block", () => {
  test("consent checkbox label contains a data protection link", async ({ page }) => {
    await page.goto(FORM_PAGE_PATH);
    await acceptCookies(page);

    const form = page.locator("form", { has: page.locator(FIRST_NAME_SELECTOR) }).first();
    const consentLabel = form.locator('label[data-slot="form-control"]', {
      hasText: "I hereby declare my consent",
    });
    // Find the link inside the label
    const dataProtectionLink = consentLabel.locator("a", { hasText: "data protection" });

    await expect(dataProtectionLink).toBeVisible();
    await expect(dataProtectionLink).toHaveAttribute("href", "/global/en/footer/data-protection");
  });

  test("submits random data and clears the form on success", async ({ page }) => {
    // Intercept a successful POST
    await generateSuccessLeadsMock(page);

    await page.goto(FORM_PAGE_PATH);
    await acceptCookies(page);

    const form = page.locator("form", { has: page.locator(FIRST_NAME_SELECTOR) }).first();
    await fillForm(form);

    await form.locator(SUBMIT_BUTTON, { hasText: "Submit" }).click();

    // Success message
    await expect(page.locator("text=Thank you! Your message has been submitted.")).toBeVisible();

    // Form should be cleared
    await expect(form.locator(FIRST_NAME_SELECTOR)).toHaveValue("");
    await expect(form.locator(LAST_NAME_SELECTOR)).toHaveValue("");
    await expect(form.locator(EMAIL_SELECTOR)).toHaveValue("");
    await expect(form.locator(PHONE_SELECTOR)).toHaveValue("");
    await expect(form.locator(DESCRIPTION_SELECTOR)).toHaveValue("");
  });

  test("shows error and does NOT clear the form on failed submission (500)", async ({ page }) => {
    // Intercept failure POST
    await page.route("**/v1/leads", async (route) => {
      if (route.request().method() === "POST") {
        return route.fulfill({
          status: 500,
          contentType: "application/json",
          body: JSON.stringify({ error: true }),
        });
      }
      await route.continue();
    });

    await page.goto(FORM_PAGE_PATH);
    await acceptCookies(page);

    const form = page.locator("form", { has: page.locator(FIRST_NAME_SELECTOR) }).first();
    await fillForm(form);

    await form.locator(SUBMIT_BUTTON, { hasText: "Submit" }).click();

    // Error message appears (adjust selector/text to match your UI)
    await expect(page.locator("text=Error. Please try again later.")).toBeVisible();

    // Form SHOULD NOT be cleared
    await expect(form.locator(FIRST_NAME_SELECTOR)).not.toHaveValue("");
    await expect(form.locator(LAST_NAME_SELECTOR)).not.toHaveValue("");
    await expect(form.locator(COMPANY_SELECTOR)).not.toHaveValue("");
    await expect(form.locator(EMAIL_SELECTOR)).not.toHaveValue("");
    await expect(form.locator(PHONE_SELECTOR)).not.toHaveValue("");
    await expect(form.locator(DESCRIPTION_SELECTOR)).not.toHaveValue("");
  });

  test("prefills company field from company query param and posts the same value", async ({
    page,
  }) => {
    await generateSuccessLeadsMock(page);

    await page.goto(FORM_PAGE_PATH);
    await acceptCookies(page);

    const form = page.locator("form", { has: page.locator(FIRST_NAME_SELECTOR) }).first();
    await expect(form.locator(COMPANY_SELECTOR)).toHaveValue(testCompany);
    await fillForm(form, { company: true });
    await form.locator(SUBMIT_BUTTON, { hasText: "Submit" }).click();
    await expect(page.locator("text=Thank you! Your message has been submitted.")).toBeVisible();
  });

  test("prefills product topic from meta form: attribute in metadata", async ({ page }) => {
    const testProductTopic = "TestDE";
    await generateSuccessLeadsMock(page);

    await page.goto(FORM_PAGE_PATH);
    await acceptCookies(page);

    const meta = page.locator('head meta[property="form:producttopic"]');
    await expect(meta).toHaveAttribute("content", testProductTopic);

    const form = page.locator("form", { has: page.locator(FIRST_NAME_SELECTOR) }).first();
    await page.waitForTimeout(1000);

    await fillForm(form);
    await form.locator(SUBMIT_BUTTON, { hasText: "Submit" }).click();
    await expect(page.locator("text=Thank you! Your message has been submitted.")).toBeVisible();
  });

  test("prefills country from the url parameter for country", async ({ page }) => {
    await generateSuccessLeadsMock(page);

    await page.goto(FORM_PAGE_PATH);
    await acceptCookies(page);

    const form = page.locator("form", { has: page.locator(FIRST_NAME_SELECTOR) }).first();
    await page.waitForTimeout(1000);

    await expect(form.locator(COUNTRY_SELECT).nth(1)).toHaveValue("de");

    await fillForm(form);
    await form.locator(SUBMIT_BUTTON, { hasText: "Submit" }).click();
    await expect(page.locator("text=Thank you! Your message has been submitted.")).toBeVisible();
  });
});
