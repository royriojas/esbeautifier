module.exports = function ( files, cfg ) {

  var esformatter = require( 'esformatter' );
  var path = require( 'path' );
  var read = require( 'read-file' ).readFileSync;
  var write = require( 'write' ).sync;
  var process = require( './process' );

  files.forEach( function ( file ) {
    var output = esformatter.format( read( file ), cfg );
    write( file, output );
    console.log( 'beautified file', file );
  } );
};

//var fBefore = [
//  '../index.js',
//  '../specs/**/*.js',
//  '../configs/*.js'
//].map( function ( file ) {
//    return path.resolve( __dirname, file );
//  } );
