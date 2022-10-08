#!/usr/bin/env node

// This module rebuild apm with the bundled node.

const cp = require('child_process')
const path = require('path')

let script = path.join(__dirname, 'rebuild')
if (process.platform === 'win32') {
  script += '.cmd'
} else {
  script += '.sh'
}

const child = cp.spawn(script, [], { stdio: ['pipe', 'pipe', 'pipe'], shell: true })
child.stderr.pipe(process.stderr)
child.stdout.pipe(process.stdout)
