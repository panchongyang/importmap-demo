import { getFiles, libEntrys } from "./vite.config.lib";
import react from '@vitejs/plugin-react';

export default {
  plugins: [
    react(),
    {
      name: "html-transform",
      transformIndexHtml(html) {
        return [
          {
            tag: "script",
            attrs: {
              type: "importmap",
            },
            children: JSON.stringify({
              imports: libEntrys.reduce<Record<string, string>>((pre, cur) => {
                if (cur.name.endsWith("/")) {
                  return {
                    ...pre,
                    [cur.name]: `/plugin/lib/${cur.name}`
                  }
                } else {
                  return {
                    ...pre,
                    [cur.name]: `/plugin/lib/${cur.outDir ?? ""}${cur.name}.js`,
                  };
                }
              }, {}),
            }),
            injectTo: "head-prepend",
          },
        ];
      },
    },
  ],
};
