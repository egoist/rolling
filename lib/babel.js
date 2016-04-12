'use strict'
const babel = require('rollup-plugin-babel')

module.exports = function () {
  return babel({
    presets: [require('babel-preset-es2015-rollup'), require('babel-preset-stage-0')],
    plugins: [require('babel-plugin-transform-runtime')],
    exclude: 'node_modules/**'
  })
}
