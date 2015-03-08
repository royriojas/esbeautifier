#!/usr/bin/env node
try {
  require( '../cli' ).beautify( process.argv );
} catch (ex) {
  console.error( ex.message );
  process.exit( 1 );
}
