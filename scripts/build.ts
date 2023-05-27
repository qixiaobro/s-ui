import { config } from "../vite.config";
import { build, InlineConfig, defineConfig, UserConfig } from "vite";
import fs from "fs-extra";
import path from "path";

const buildConfig: InlineConfig = {
  ...config,
  configFile: false,
}

const buildAll = async () => {
  
  // 全量打包
  await build(buildConfig);

  const srcDir = path.resolve(__dirname, "../src/");
  fs.readdirSync(srcDir)
    .filter((name) => {
      // 只要目录不要文件，且里面包含index.ts
      const componentDir = path.resolve(srcDir, name);
      const isDir = fs.lstatSync(componentDir).isDirectory();
      return isDir && fs.readdirSync(componentDir).includes("index.ts");
    })
    .forEach(async (name) => {
      console.log(name);
      
      const outDir = path.resolve(buildConfig.build.outDir, name);
      const custom = {
        lib: {
          entry: path.resolve(srcDir, name),
          name, // 导出模块名
          fileName: `index`,
          formats: [`es`, `umd`,'iife'],
        },
        outDir,
      };

      Object.assign(buildConfig.build, custom);
      await build(buildConfig);

      fs.outputFile(
        path.resolve(outDir, `package.json`),
        `{
          "name": "smarty-ui-vite/${name}",
          "main": "index.umd.js",
          "module": "index.mjs"
        }`,
        `utf-8`
      );
    });
};

buildAll();
