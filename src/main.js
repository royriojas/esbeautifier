'use strict';

module.exports = {
  dirname: __dirname,
  run: function ( cli ) {

    // region requires
    var expand = require( 'glob-expand' );
    var console = require( './../lib/console' );
    var sFormat = require( 'stringformat' );
    var path = require( 'path' );
    var process = require( './../lib/process' );
    var chalk = require( 'chalk' );
    // endregion

    var opts = cli.opts;

    var files = opts._.map( function ( glob ) {
      return path.resolve( process.cwd(), glob );
    } );

    files = expand.apply( null, files );

    if ( files.length === 0 ) {
      //console.log( chalk.green( '>> no files to beautify' ) );
      cli.ok( 'No files to beautify' );
      return;
    }

    var cfg = cli.getConfig();

    var beautifier = require( './../index' );
    var checkOnly = !!opts.checkOnly;
    var useCache = !!opts.useCache;

    if ( !checkOnly ) {
      beautifier.on( 'beautify.cli', function ( e, _args ) {
        cli.subtle( 'beautifying', _args.file );
      } );

      beautifier.on( 'done.cli', function ( e, _args ) {
        var msg = chalk.green( '>> No files needed beautification!' );

        if ( _args.count > 0 ) {
          msg = sFormat( '{0} {1} file(s) beautified', chalk.yellow( '>> beautifying done!' ), _args.count );
        }

        console.log( msg );
      } );
    } else {

      var filesToBeautify = [];

      beautifier.on( 'need:beautify.cli', function ( e, _args ) {
        filesToBeautify.push( _args.file );
      } );

      beautifier.on( 'check:done.cli', function () {
        if ( filesToBeautify.length > 0 ) {
          console.error( chalk.red( '>> the following files need beautification: ' ), chalk.yellow( '\n\n   - ' + filesToBeautify.join( '\n   - ' ) ) + '\n' );
          throw new Error( sFormat( '{0} files need beautification', filesToBeautify.length ) );
        } else {
          cli.success( 'All files are beautified.' );
        }
      } );
    }

    cli.subtle( 'cache:', useCache, 'checkOnly:', checkOnly );

    beautifier.beautify( files, {
      useCache: useCache,
      checkOnly: checkOnly,
      cfg: cfg
    } );

    beautifier.off( '.cli' );
  }
};
