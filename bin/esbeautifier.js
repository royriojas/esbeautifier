#!/usr/bin/env node
var console = require( '../lib/console' );
var process = require( '../lib/process' );
var chalk = require( 'chalk' );
try {
  require( '../lib/cli' ).beautify( process.argv );
} catch (ex) {
  console.error( chalk.red( '>>' ), ex.message );
  /*eslint-disable*/
  process.exit( 1 );
  /*eslint-enable*/
}
