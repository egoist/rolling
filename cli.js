#!/usr/bin/env node
'use strict'
const cli = require('commander')
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

cli.parse(process.argv)
