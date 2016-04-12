'use strict'
const Fs = require('fs')
const Path = require('path')
const rollup = require('rollup')
const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('./babel')

module.exports = function (args) {
  const plugins = [
    babel()
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
    const result = bundle.generate({
      format: 'cjs'
    })
    const dest = args.dest || 'dist/bundle.js'
    Fs.writeFileSync(Path.join(process.cwd(), dest), result.code, 'utf8')
  }).catch(e => {
    console.log(e.stack)
    process.exit(1)
  })
}
