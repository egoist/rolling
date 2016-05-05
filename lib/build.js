'use strict'
const rollup = require('rollup')
const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('./babel')

module.exports = function (args) {
  const plugins = [
    babel(args)
  ]
  if (args.inline) {
    plugins.push(
      nodeResolve({
        main: true,
        jsnext: args.jsnext,
        skip: args.skip,
        extensions: ['.js', '.json']
      }),
      commonjs({include: 'node_modules/**'})
    )
  }
  return rollup.rollup({
    entry: args.entry || './src/index.js',
    plugins
  }).then(bundle => {
    const dest = args.dest || 'dist/bundle.js'
    return bundle.write({
      format: args.format || 'cjs',
      moduleName: args.name,
      dest
    })
  }).catch(e => {
    console.log(e.stack)
    process.exitCode = 1
  })
}
