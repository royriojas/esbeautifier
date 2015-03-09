#!/usr/bin/env node
try {
  require( '../lib/cli' ).beautify( process.argv );
} catch (ex) {
  console.error( ex.message );
  /*eslint-disable*/
  process.exit( 1 );
  /*eslint-enable*/
}
