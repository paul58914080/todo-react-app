# todo app

## How did I creat this structure ?

1. Create a react app with template as typescript

**`npx create-react-app todo-app --template typescript`**

2. Add ES Line

**`yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-typescript eslint-plugin-jest`**

AirBnB config

**`npx install-peerdeps --dev eslint-config-airbnb`**

3. Add Prettier

**`yarn add -D prettier eslint-config-prettier eslint-plugin-prettier`**

4. ESLint Config (`.eslintrc.js`)

```javascript
module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'linebreak-style': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
```
~~~~
5. Add to scripts(`package.json`)

```json
"scripts": {
  "format": "prettier --write src/**/*.ts{,x}",
  "lint": "tsc --noEmit && eslint src/**/*.ts{,x}"
}

```

6. Add sass

**`yarn add node-sass@4.14.1`**


## Generate components

https://www.npmjs.com/package/generate-react-cli

**`npx generate-react-cli component Box`**

## Reference

- https://medium.com/@brygrill/create-react-app-with-typescript-eslint-prettier-and-github-actions-f3ce6a571c97
- https://create-react-app.dev/docs/adding-a-sass-stylesheet/
- https://reactjs.org/docs/code-splitting.html#route-based-code-splitting
- https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
- https://blog.harveydelaney.com/setting-up-a-mock-api-for-your-front-end-react-project/

## Todo

- [x] Generate an app with typescript
- [x] There should be linting on typescript
- [x] There should be linting on scss
- [x] Add husky for pre-commit hooks
- [ ] Add jest and enzyme for testing
- [x] Add bootstrap for styling 
- [ ] React router
- [ ] React hooks
- [ ] Mock server
- [ ] Axios
