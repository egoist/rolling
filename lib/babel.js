'use strict'
const babel = require('rollup-plugin-babel')

module.exports = function (args) {
  const babelrc = typeof args.babelrc === 'boolean'
    ? args.babelrc
    : false
  return babel({
    presets: [
      require('babel-preset-es2015-rollup'),
      require('babel-preset-stage-1')
    ],
    plugins: [
      require('babel-plugin-transform-runtime')
    ],
    runtimeHelpers: true,
    babelrc,
    exclude: 'node_modules/**'
  })
}
