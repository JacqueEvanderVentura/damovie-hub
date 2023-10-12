module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"standard-with-typescript",
		"plugin:react/recommended",
		"eslint-config-prettier",
	],
	overrides: [
		{
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"react/react-in-jsx-scope": 0,
		"semi": "off",
		"@typescript-eslint/semi": ["error","always"],
		"@typescript-eslint/space-before-function-paren": 0,
		"@typescript-eslint/consistent-type-imports": 2,
		"@typescript-eslint/quotes": ["error", "double"],
		"@typescript-eslint/no-unused-expressions": 2,
		"@typescript-eslint/no-confusing-void-expression": 2,
		"@typescript-eslint/consistent-type-imports": 0
	},
};
