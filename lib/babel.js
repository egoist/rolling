'use strict'
const babel = require('rollup-plugin-babel')

module.exports = function (args) {
  return babel({
    presets: [
      require('babel-preset-es2015-rollup'),
      require('babel-preset-stage-0')
    ],
    babelrc: args.babelrc,
    exclude: 'node_modules/**'
  })
}
