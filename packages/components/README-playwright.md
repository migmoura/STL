# Playwright Setup for @contitech/components

This package uses [Playwright](https://playwright.dev/) for end-to-end testing.

## Getting Started

1. **Install dependencies** (already done):
   ```sh
   pnpm --filter @contitech/components add -D playwright @playwright/test
   pnpm --filter @contitech/components exec playwright install
   ```

2. **Configuration**
   - Playwright config: `playwright.config.ts` in this package.

3. **Running Tests**
   - Start your dev server (e.g. `pnpm --filter @contitech/components run dev` or ensure the form page is available at the configured baseURL).
   - Run Playwright tests:
     ```sh
     pnpm --filter @contitech/components exec playwright test
     ```

4. **Test Example**
   - See `tests/form-clear-after-submit.spec.ts` for a sample test that checks a form is cleared after successful submission.
   - Update selectors and URLs in the test to match your actual form implementation.

## Directory Structure

- `playwright.config.ts` – Playwright configuration
- `tests/` – All Playwright test files

---

For more info, see [Playwright docs](https://playwright.dev/docs/intro).

