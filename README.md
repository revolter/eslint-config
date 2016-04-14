habitrpg-eslint-config
===
Shared linting configuration for [HabitRPG, Inc](https://github.com/HabitRPG) projects.

- [index.js](./index.js): base configuration
- [server.js](./server.js): special rules for code on the server
- [browser.js](./browser.js): special rules for code on the browser
- [es6.js](./es6.js): special rules for es6 code
- [babel.js](./babel.js): inherits from es6 and adds babel specific rules
- [mocha.js](./mocha.js): special rules for the moch test framework

## Consuming

Install the module

```bash
npm i -D habitrpg-eslint-config
```

In your project's `.eslintrc`:

### default

```json
{
  "extends": "habitrpg",
  "rules": {
    "locally-overriden-rule": 1
  }
}
```

### browser/browserify

```json
{
  "extends": "habitrpg/browser",
  "rules": {
    "locally-overriden-rule": 1
  }
}
```

### mocha

**Note:** The mocha config requires you to install [eslint-plugin-mocha](http://npmjs.com/eslint-plugin-mocha)

```json
{
  "extends": "habitrpg/mocha",
  "rules": {
    "locally-overriden-rule": 1
  }
}
```

### browserify + babel

**Note:** The babel config requires you to install [eslint-plugin-babel](http://npmjs.com/eslint-plugin-babel) and [babel-eslint](https://npmjs.com/babel-eslint)

```json
{
  "extends": [
    "habitrpg/browser",
    "habitrpg/babel"
  ],
  "rules": {
    "locally-overriden-rule": 1
  }
}
```

---

You can specify a `.eslintrc` for a subdirectory to change the rules that are enforced. For instance, in a node project you could extend from `habitrpg/server` at the top-level, `habitrpg/mocha` in your `test/.eslintrc` and `habitrpg/browser` at the `browser-files/.eslintrc` level.
