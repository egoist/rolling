'use strict'
const assert = require('assert')
const co = require('co')
const rollup = require('rollup')
const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('./babel')

module.exports = co.wrap(function* (options) {
  assert(options.input, 'Expected an input file')
  assert(options.output, 'Expected an output file')

  const plugins = [babel(options)]
  if (options.include) {
    plugins.push(
      nodeResolve({
        main: true,
        jsnext: options.jsnext,
        skip: options.skip,
        extensions: ['.js', '.json']
      }),
      commonjs({include: 'node_modules/**'})
    )
  }
  const bundle = yield rollup.rollup({
    entry: options.input,
    plugins
  })
  yield bundle.write({
    format: options.umd ? 'umd' : 'cjs',
    moduleName: options.umd,
    dest: options.output
  })
  return bundle
})
