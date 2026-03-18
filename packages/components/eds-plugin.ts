import path from "node:path";
import { readdirSync } from "node:fs";
import { viteStaticCopy as staticCopy } from "vite-plugin-static-copy";
import { promises as fs } from "fs";

export default ({
  src,
  css,
  target,
  scripts,
}: {
  src: string;
  css: string;
  target: string;
  scripts?: string;
}) => {
  const blocksDir = path.resolve(__dirname, src);
  const edsRoot = path.resolve(__dirname, target);
  const blocks = readdirSync(blocksDir);
  const entry = blocks.map((block) => path.resolve(blocksDir, `${block}/${block}.tsx`));
  entry.push(path.resolve(__dirname, css));

  const cleanFolders = ["scripts"];
  const targets = [
    {
      src: path.resolve(__dirname, "dist/eds/blocks/*"),
      dest: path.join(edsRoot, "blocks/"),
    },
    {
      src: path.resolve(__dirname, "dist/eds/scripts/*"),
      dest: path.join(edsRoot, "scripts/"),
    },
    {
      src: path.resolve(__dirname, "dist/eds/styles.css"),
      dest: path.join(edsRoot, "styles"),
    },
  ];
  if (scripts) {
    targets.push({
      src: path.resolve(__dirname, scripts, "*"),
      dest: path.join(edsRoot, "scripts/"),
    });
  }

  const copyPlugin = staticCopy({
    targets,
  });

  return [
    {
      name: "eds-config",
      config(config: any) {
        config.build = config.build || {};
        config.build.outDir = "dist/eds";
        config.build.cssCodeSplit = true;
        config.build.rollupOptions = config.build.rollupOptions || {};
        config.build.rollupOptions.output = {
          ...config.build.rollupOptions.output,
          chunkFileNames: "scripts/[name]-[hash].js",
        };
        config.build.lib = {
          ...config.build.lib,
          entry,
          fileName: (_: any, name: string) => {
            return `blocks/${name}/${name}.js`;
          },
          formats: ["es"],
        };
      },
      async buildStart() {
        for (const folder of cleanFolders) {
          const dir = path.join(edsRoot, folder);
          try {
            await fs.rm(dir, { recursive: true, force: true });
            console.log("Deleted scripts folder:", dir);
          } catch (err) {
            console.error("Error deleting scripts folder:", err);
          }
        }
      },
    },
    ...copyPlugin,
  ];
};
