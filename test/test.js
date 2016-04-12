import test from 'ava'
import {execSync} from 'child_process'
import {build} from '../'

test.beforeEach(() => {
  execSync('rm -f bundle.js')
})

test('main', async t => {
  try {
    const args = {
      entry: './fixture.js',
      dest: 'bundle.js',
      inline: true
    }
    await build(args)
    const file = require('./bundle')
    t.is(file.foo(), 'bar')
  } catch (e) {
    t.fail(e.message)
  }
})
