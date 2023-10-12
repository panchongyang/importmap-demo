import { BuildOptions, defineConfig } from "vite";
import replace from "@rollup/plugin-replace";
import { buildPlugin } from "vite-plugin-build";
import { readdirSync } from "fs";

export function getFiles(dir, end) {
  const res = readdirSync(dir);
  return res.filter((item) => {
    return item.endsWith(end);
  });
}

export const libEntrys = [
  {
    name: "react",
    entry: "./node_modules/react/cjs/react.production.min.js",
  },
  {
    name: "react-dom",
    entry: "./node_modules/react-dom/cjs/react-dom.production.min.js",
  },

  {
    name: "antd",
    entry: "./node_modules/antd/es/index.js",
    outDir: "antd/",
  },
  {
    name: "antd/",
    entry: "./node_modules/antd/locale/",
    outDir: "antd/locale/",
  },
];

export default defineConfig({
  mode: "production",
  plugins: [
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    buildPlugin({
      libBuild: {
        buildOptions: libEntrys.reduce<BuildOptions[]>((pre, lib) => {
          if (lib.name.endsWith("/")) {
            const entrys = getFiles(lib.entry, ".js").map((item) => {
              return `${lib.entry}${item}`;
            });
            const options: BuildOptions[] = entrys.map((fileEntry) => {
              return {
                rollupOptions: {
                  external: ["react", "react-dom"],
                  output: {
                    globals: {
                      react: "React",
                      "react-dom": "ReactDOM",
                    },
                  },
                },
                lib: {
                  entry: fileEntry,
                  name: "RbacComponents",
                  formats: ["es", "es"],
                  fileName: (format, entryName) => {
                    return `${lib.outDir ?? ""}${entryName}.js`;
                  },
                },
                outDir: "dist/plugin/lib/",
              };
            });
            return [...pre, ...options];
          } else {
            return [
              ...pre,
              {
                rollupOptions: {
                  external: ["react", "react-dom"],
                  output: {
                    globals: {
                      react: "React",
                      "react-dom": "ReactDOM",
                    },
                  },
                },
                lib: {
                  entry: lib.entry,
                  name: "RbacComponents",
                  formats: ["es", "es"],
                  fileName: (format, entryName) => {
                    return `${lib.outDir ?? ""}${lib.name}.js`;
                  },
                },
                outDir: "dist/plugin/lib/",
              },
            ];
          }
        }, []),
      },
    }),
  ],
});
