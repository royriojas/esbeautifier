module.exports = function ( cmd, options ) {
  var ES6Promise = require( 'es6-promise' ).Promise;

  var opts = { stdio: 'inherit' };

  var extend = require( 'extend' );

  extend( opts, options );

  var spawn = require( 'child_process' ).spawn;
  var args = cmd.split( ' ' );
  var command = args.shift();

  return new ES6Promise( function ( resolve, reject ) {

    var cp = spawn( command, args, opts );

    cp.on( 'exit', function ( exitCode ) {
      if ( exitCode !== 0 ) {
        reject( exitCode );
      } else {
        resolve();
      }
    } );
  } );
};
