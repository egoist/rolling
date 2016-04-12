'use strict'
const Fs = require('fs')
const Path = require('path')
const rollup = require('rollup')
const babel = require('./babel')

module.exports = function (args) {
  return rollup.rollup({
    entry: args.entry || './src/index.js',
    plugins: [
      babel()
    ]
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
