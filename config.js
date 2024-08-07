module.exports = {
  root: true,
  ignorePatterns: ["projects/**/*"],
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: ["tsconfig.(app|spec).json"],
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:@angular-eslint/recommended",
      ],
      plugins: ["@typescript-eslint", "import", "prefer-arrow"],
      rules: {
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
          },
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case",
          },
        ],
        "@angular-eslint/no-input-rename": "off",
        "@typescript-eslint/no-confusing-void-expression": [
          "error",
          {
            ignoreArrowShorthand: true,
            ignoreVoidOperator: true,
          },
        ],
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-import-type-side-effects": "error",
        "@typescript-eslint/unified-signatures": "off",
        "@typescript-eslint/restrict-template-expressions": [
          "error",
          {
            allowNumber: true,
            allowBoolean: true,
            allowArray: true,
          },
        ],
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_.*",
            varsIgnorePattern: "^_.*",
            ignoreRestSiblings: true,
          },
        ],
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          { accessibility: "no-public" },
        ],
        "object-shorthand": "error",
        "no-console": "error",
        "no-useless-rename": "error",
      },
    },
    {
      files: ["*.html"],
      extends: [
        "plugin:@angular-eslint/template/recommended",
        "plugin:@angular-eslint/template/accessibility",
        "plugin:@angular-eslint/template/process-inline-templates",
      ],
      rules: {
        "@angular-eslint/template/interactive-supports-focus": "warn",
        "@angular-eslint/template/click-events-have-key-events": "warn",
        "@angular-eslint/template/prefer-self-closing-tags": "error",
        "@angular-eslint/template/prefer-control-flow": "error",
        "@angular-eslint/template/no-duplicate-attributes": "error",
        "@angular-eslint/template/prefer-ngsrc": "error",
        "@angular-eslint/template/no-any": "error",
        "@angular-eslint/template/attributes-order": "error",
        "no-unused-vars": "off",
      },
    },
  ],
};
