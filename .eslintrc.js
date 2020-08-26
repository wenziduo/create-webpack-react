module.exports = {
  // env: {
  //   browser: true,
  //   es6: true,
  //   node: true,
  //   commonjs: true,
  // },
  // extends: [
  //   'plugin:react/recommended',
  //   'airbnb',
  //   'prettier',
  //   'prettier/@typescript-eslint',
  //   'plugin:@typescript-eslint/recommended',
  //   'plugin:prettier/recommended',
  //   'eslint:recommended',
  // ],
  // installedESLint: true,
  // parserOptions: {
  //   ecmaFeatures: {
  //     experimentalObjectRestSpread: true,
  //     jsx: true,
  //     arrowFunctions: true,
  //     classes: true,
  //     modules: true,
  //     defaultParams: true,
  //   },
  //   ecmaVersion: 7,
  //   sourceType: 'module',
  // },
  // parser: '@typescript-eslint/parser',
  // plugins: ['react', '@typescript-eslint'],
  // rules: {
  //   'linebreak-style': ['error', 'unix'],
  //   //"semi": ["error", "always"],
  //   'no-empty': 0,
  //   'comma-dangle': 0,
  //   'no-unused-vars': 0,
  //   'no-console': 0,
  //   'no-const-assign': 2,
  //   'no-dupe-class-members': 2,
  //   'no-duplicate-case': 2,
  //   'no-extra-parens': [2, 'functions'],
  //   'no-self-compare': 2,
  //   'accessor-pairs': 2,
  //   'comma-spacing': [
  //     2,
  //     {
  //       before: false,
  //       after: true,
  //     },
  //   ],
  //   'constructor-super': 2,
  //   'new-cap': [
  //     2,
  //     {
  //       newIsCap: true,
  //       capIsNew: false,
  //     },
  //   ],
  //   'new-parens': 2,
  //   'no-array-constructor': 2,
  //   'no-class-assign': 2,
  //   'no-cond-assign': 2,
  //   'no-mixed-spaces-and-tabs': 0,
  //   quotes: [1, 'single'], //引号类型 `` "" ''
  //   semi: [2, 'never'], // 语句强制分号结尾
  //   'space-before-function-paren': [0, 'always'], //函数定义时括号前面要不要有空格
  // },
  // globals: {
  //   NICE_FEATURE: true,
  // },
  parser: '@typescript-eslint/parser',
  extends: ['prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    quotes: [1, 'single'],
  },
};
