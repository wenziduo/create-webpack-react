module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		node: true,
		commonjs: true,
	},
	extends: [
		'plugin:react/recommended',
		// 'airbnb',
		'prettier',
		// 'prettier/@typescript-eslint',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'eslint:recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
		'plugin:import/typescript',
		'plugin:react-hooks/recommended',
	],
	// installedESLint: true,
	parserOptions: {
		parser: 'babel-eslint',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
			arrowFunctions: true,
			classes: true,
			modules: true,
			defaultParams: true,
		},
		ecmaVersion: 7,
		sourceType: 'module',
	},
	parser: '@typescript-eslint/parser',
	plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
	settings: {
		react: {
			pragma: 'React',
			version: 'detect',
		},
		'import/resolver': {
			webpack: {
				config: './webpack-config/index.js', // 指定webpack配置文件路径
			},
			alias: {
				map: [['@', './src']],
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
			},
		},
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
		'linebreak-style': ['error', 'windows'],
		'no-empty': 0,
		'comma-dangle': 0,
		'no-unused-vars': 0,
		'no-console': 0,
		'no-const-assign': 2,
		'no-dupe-class-members': 2,
		'no-duplicate-case': 2,
		'no-extra-parens': [2, 'functions'],
		'no-self-compare': 2,
		'accessor-pairs': 2,
		'comma-spacing': [
			2,
			{
				before: false,
				after: true,
			},
		],
		'constructor-super': 2,
		'new-cap': [
			2,
			{
				newIsCap: true,
				capIsNew: false,
			},
		],
		'new-parens': 2,
		'no-array-constructor': 2,
		'no-class-assign': 2,
		'no-cond-assign': 2,
		'no-mixed-spaces-and-tabs': 0,
		quotes: [1, 'single'], //引号类型 `` "" ''
		semi: ['error', 'always'], // 语句强制分号结尾
		'space-before-function-paren': [1, 'always'], //函数定义时括号前面要不要有空格
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
	globals: {
		NICE_FEATURE: true,
	},
};
