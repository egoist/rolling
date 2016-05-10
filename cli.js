#!/usr/bin/env node
'use strict'
const cac = require('cac')
const build = require('./lib/build')

cli
  .command('build')
  .option('-e, --entry [entry]', 'Entry file')
  .option('-f, --format [format]', 'Bundle format')
  .option('-n, --name [moduleName]', 'Bundled module name')
  .option('-d, --dest [dest]', 'Dest path')
  .option('-i, --inline', 'Inline required modules')
  .option('-s, --skip', 'Never inline these modules')
  .option('-j, --jsnext', 'Resolve jsnext field when inline modules')
  .option('--babelrc', 'User local babelrc file')
  .action(build)

const cli = cac(`
  Usage:
    rolling [file] [options]
  
  Examples:
    rolling app.js
    rolling app.js --out out.js
  
  Options:
    -o, --out                 Output to a single file
    --umd <moduleName>        Output in UMD format, with a neccessary moduleName
    -i, --include             Include required modules from node_modules directory into the bundled file
    --skip                    A list of module names to exclude in bundled file
    --jsnext                  Resolve jsnext field in package.json
    --babelrc                 Use a specfic .babelrc file
    -w, --watch               Watch input files
    -v, --version             Output version number
    -h, --help                Output help (You are here!)
`, {
  alias: {
    out: 'output',
    o: 'output',
    i: 'include',
    w: 'watch'
  }
})

cli.command('*', function* () {
  const input = this.input[0] || './src/index.js'
  const flags = this.flags
  const output = flags.output || './dist/bundle.js'
  const options = Object.assign({}, flags, {
    input, output
  })
  yield build(options)
})

cli.parse()
