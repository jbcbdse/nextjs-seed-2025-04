import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier";
import * as tseslint from "@typescript-eslint/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      ...tseslint.configs.strict.rules,
      ...tseslint.configs.stylistic.rules,
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "space-before-blocks": "error",
      "@typescript-eslint/no-unused-vars": "error",
    },
  },
];

export default eslintConfig;
