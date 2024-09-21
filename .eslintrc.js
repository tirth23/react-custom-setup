/* eslint-disable */
module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
	],
	plugins: ["react", "react-hooks", "@typescript-eslint"],
	env: {
		node: true,
	},
	rules: {
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
	},
	globals: {
		// Allow the use of these variables wihout the need for them to be defined
		window: true,
		document: true,
		console: true,
	},
	// Ignore the following directories/files when linting
	ignorePatterns: [
		"node_modules/",
		"build/",
		"dist/",
		"public/",
		"**/components/ui/*",
	],
	settings: {
		react: {
			version: "detect",
		},
	},
};
