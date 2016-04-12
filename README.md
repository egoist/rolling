# rolling [![NPM version](https://img.shields.io/npm/v/rolling.svg)](https://npmjs.com/package/rolling) [![NPM downloads](https://img.shields.io/npm/dm/rolling.svg)](https://npmjs.com/package/rolling) [![Build Status](https://img.shields.io/circleci/project/egoist/rolling/master.svg)](https://circleci.com/gh/egoist/rolling)

[Rollup](https://github.com/rollup/rollup) and [Webpack](https://github.com/webpack/webpack) are bundlers for different purposes, I mainly use `Webpack` to bundle web apps, and use `Rollup` to bundle JavaScript libraries. Using `Rollup` to bundle `CommonJS` or `ES6 module` format libraries ends up with clean, readable code, so just try it out!

However, it's not necessary to bundle all JS files into one file (I still doubt that now), just a one-command `babel src --out-dir lib` is ok as well. This repo is just for fun. I know there's a common use case for using `Rollup`, that is, to bundle `UMD/IIFE` format files to run in browser. 

## Install

Not ready yet. **WIP**

```bash
$ npm install -g rolling
```

## Usage

**You are about to bundle the library:**

```bash
# it looks for `./src/index.js` by default
# and outputs bundled file to `./dist/bundle.js`
$ rolling build

# custom entry and dest
$ rolling build --entry ./lib/index.js --dest ./index.js

# inline all required modules from `node_modules`
$ rolling build --inline
```

**You are about to build the entry file and auto-rebuild during development:**

```bash
$ rolling watch
```

**You want more configs:**

```bash
$ rolling --help
$ rolling build --help
$ rolling watch --help
```

**Babel:**

If you use some ES2015+ features that require `babel-runtime`, install it in your project:

```bash
$ cd my-project
$ npm install babel-runtime@5 --save
```

## API

```javascript
import {build, watch} from 'rolling'

const options = {
  entry: './path/to/entry.js',
  // more configs go here
}

build(options).catch(e => console.log(e.stack))
// or
watch(options).catch(e => console.log(e.stack))
```

## License

MIT © [EGOIST](https://github.com/egoist)
