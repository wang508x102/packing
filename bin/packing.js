#!/usr/bin/env node

const program = require('commander');

program
  .command('serve', 'start dev web server', { isDefault: true })
  .command('serve:dist', 'review build output')
  .command('build', 'build project')
  .parse(process.argv);
