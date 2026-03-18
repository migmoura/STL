import { defineConfig } from "i18next-cli";

export default defineConfig({
  locales: ["en", "de"],
  extract: {
    input: "src/**/*.{js,jsx,ts,tsx}",
    ignore: ["**/*.stories.{js,jsx,ts,tsx}"],
    output: "../../locales/{{language}}/{{namespace}}.json",
  },
});
