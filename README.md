# rolling [![NPM version](https://img.shields.io/npm/v/rolling.svg)](https://npmjs.com/package/rolling) [![NPM downloads](https://img.shields.io/npm/dm/rolling.svg)](https://npmjs.com/package/rolling) [![Build Status](https://img.shields.io/circleci/project/egoist/rolling/master.svg)](https://circleci.com/gh/egoist/rolling)

[Rollup](https://github.com/rollup/rollup) and [Webpack](https://github.com/webpack/webpack) are bundlers for different purposes, I mainly use `Webpack` to bundle web apps, and use `Rollup` to bundle JavaScript libraries. Using `Rollup` to bundle libraries ends up with clean, smaller, readable code, so just try it out!

## Install

```bash
$ npm install -g rolling
```

## Usage

**Build:**

```bash
# it looks for `./src/index.js` by default
# and outputs bundled file to `./dist/bundle.js`
$ rolling src.js --out bundle.js

# Include required modules from node_modules directory
# into the bundled file
$ rolling --include
```

**Watch input:**

Currently Rollup does not support incremental builds, so use any `watch utility` to do this for now, such as `onchange`:

```bash
$ npm install -g onchange
$ onchange ./src -- rolling
```

**Help:**

```bash
$ rolling --help
```

**Babel:**

If you use some ES2015+ features that require `babel-runtime`, install it in your project:

```bash
$ cd my-project
$ npm install babel-runtime --save
```

## Reciped

### Alias

In `package.json`:

```json
{
  "rolling": {
    "alias": {
      "models": "{cwd}/src/models"
    }
  }
}
```

Then just use this short-hand:

```js
import UserModel from 'models/user'
```

## API

```javascript
import {build, watch} from 'rolling'

const options = {
  input: ...,
  output: ...
  // more configs go here
}

build(options).catch(e => console.log(e.stack))
// or
watch(options).catch(e => console.log(e.stack))
```

## License

MIT © [EGOIST](https://github.com/egoist)
