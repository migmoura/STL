import { defineConfig, loadEnv } from "vite";
import eds from "./eds-plugin.ts";
import preact from "@preact/preset-vite";
// import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";
import oxlintPlugin from "vite-plugin-oxlint";

import path from "node:path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    build: {
      rollupOptions: {
        external: [/\/scripts\/.*/],
        output: {
          manualChunks: (id) => {
            if (/(^|\/)(react|react-dom|lucide-react|preact)(\/|$)/.test(id)) {
              return "react";
            } else if (id.includes("tailwind")) {
              return "tailwind";
            }
          },
        },
      },
    },
    plugins: [
      oxlintPlugin({
        path: "src",
      }),
      preact(),
      tailwindcss(),
      eds({
        src: "src/blocks",
        css: "src/styles.css",
        target: "../..",
        scripts: ".scripts",
      }),
    ],
    define: {
      "process.env": env,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@scripts": path.resolve(__dirname, "../../scripts"),
      },
    },
  };
});
