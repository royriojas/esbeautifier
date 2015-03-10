'use strict';

module.exports = {
  dirname: __dirname,
  beautify: function ( args ) {
    var sFormat = require( 'stringformat' );
    var path = require( 'path' );
    var process = require( './process' );
    var chalk = require( 'chalk' );

    var options = require( './options' );
    var fs = require( 'fs' );

    var readJSON = require( 'read-json-sync' );
    var expand = require( 'glob-expand' );

    var opts = options.parse( args );

    if ( opts.help ) {
      console.log( options.generateHelp() );
      return;
    }

    if ( opts.version ) {
      console.log( readJSON( path.resolve( this.dirname, '../package.json' ) ).version );
      return;
    }

    var files = opts._.map( function ( glob ) {
      return path.resolve( process.cwd(), glob );
    } );

    files = expand.apply( null, files );

    if ( files.length === 0 ) {
      console.log( chalk.green( '>> no files to beautify' ) );
      console.log( options.generateHelp() );
      return;
    }

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


    var beautifier = require( './../index' );
    if ( !opts.checkOnly ) {
      beautifier.on( 'beautify.cli', function ( e, _args ) {
        console.log( chalk.gray( '>> beautifying' ), _args.file );
      } );
      beautifier.on( 'done.cli', function ( e, _args ) {
        if ( _args.count === 0 ) {
          console.log( chalk.green( '>> No files needed beautification!' ) );
        } else {
          console.log( chalk.yellow( '>> beautifying done!' ), _args.count, 'file(s) beautified' );
        }
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
          console.log( chalk.yellow( '>> All files are beautified.' ) );
        }
      } );
    }

    beautifier.beautify( files, {
      useCache: opts.useCache,
      checkOnly: opts.checkOnly,
      cfg: cfg
    } );

    beautifier.off( '.cli' );

    //    } catch (ex) {
    //        throw new Error( sFormat( 'error trying to format files {0}, Error: {1}', JSON.stringify( opts, null, 2 ), ex.message ) );
    //    }
  }
};
