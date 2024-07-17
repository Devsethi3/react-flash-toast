import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "react-flash-toast",
  },
  external: ["react", "react-dom"],
  plugins: [
    typescript({ tsconfig: "tsconfig.json" }),
    postcss({
      modules: true,
      minimize: true,
      inject: false,
      extract: true,
    }),
  ],
});
