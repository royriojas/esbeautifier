'use strict';

module.exports = {
  dirname: __dirname,
  beautify: function ( args ) {
    var sFormat = require( 'stringformat' );
    var path = require( 'path' );
    var process = require( './process' );

    var options = require( './options' );
    var fs = require( 'fs' );

    var readJSON = require( 'read-json-sync' );
    var expand = require( 'glob-expand' );

    var opts = options.parse( args );

    if ( opts.help ) {
      console.log( options.generateHelp() );
      return;
    }

    if (opts.version) {
      console.log( readJSON(path.resolve(this.dirname, '../package.json' )).version );
      return;
    }

    var files = opts._.map( function ( glob ) {
      return path.resolve( process.cwd(), glob );
    } );

    files = expand.apply( null, files );

    var pathToConfig;
    if ( !opts.config ) {
      var localConfig = path.resolve( process.cwd(), './.esformatter' );
      pathToConfig = fs.existsSync( localConfig ) ? localConfig : path.resolve( this.dirname, '../configs/esformatter.json' );
    } else {
      pathToConfig = path.resolve( process.cwd(), opts.config );
    }

    var cfg = {};

    try {
      cfg = readJSON( pathToConfig );
    } catch (ex) {
      throw new Error( sFormat( 'Error loading config {0}, Error: {1}', pathToConfig, ex.message ) );
    }

    try {
      var beautifier = require( './../index' );
      beautifier.on('beautify.cli', function (e, args) {
        console.log('beautifying', args.file);
      });

      beautifier.on('done.cli', function () {
        console.log('beautifying done!');
      });

      beautifier.beautify( files, cfg );

      beautifier.off('.cli');

    } catch (ex) {
      throw new Error( sFormat( 'error trying to format files {0}, Error: {1}', JSON.stringify( opts, null, 2 ), ex.message ) );
    }
  }
};
