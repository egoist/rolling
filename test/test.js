import test from 'ava'
import {execSync} from 'child_process'
import {build} from '../'

test.beforeEach(() => {
  execSync('rm bundle.js')
})

test('main', async t => {
  try {
    const args = {
      entry: './fixture.js'
    }
    await build(args)
    const file = require('./bundle')
    t.is(file.foo(), 'bar')
  } catch (e) {
    t.fail(e.message)
  }
})
