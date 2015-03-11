'use strict';
var optionator = require( 'optionator' );
var merge = require( 'lodash.merge' );
var fs = require( 'fs' );
var nodeProcess = require( './process' );
var readJSON = require( 'read-json-sync' );
var chalk = require( 'chalk' );
var path = require( 'path' );
var sFormat = require( 'stringformat' );

var getOptions = function ( cliOptions ) {

  var optionatorOptions = merge( cliOptions.optionator, {
    concatRepeatedArrays: true,
    mergeRepeatedObjects: true
  } );

  optionatorOptions.options = optionatorOptions.options || [];

  optionatorOptions.options = optionatorOptions.options.concat( {
    option: 'help',
    alias: 'h',
    type: 'Boolean',
    description: 'Show this help'
  }, {
    option: 'version',
    alias: 'v',
    type: 'Boolean',
    description: 'Outputs the version number'
  }, {
    option: 'quiet',
    alias: 'q',
    type: 'Boolean',
    default: false,
    description: 'Show only the summary info'
  } );

  var configFile = cliOptions.configFile;
  if ( configFile ) {
    var configOption = {
      option: 'config',
      alias: 'c',
      type: 'String',
      description: configFile.description
    };

    optionatorOptions.options.push( configOption );
  }

  return optionator( optionatorOptions );
};

module.exports = function ( cliOptions, processArgsv ) {

  var options = getOptions( cliOptions );

  var opts = options.parse( processArgsv );

  var cli = {
    showHelp: function () {
      console.log( options.generateHelp() );
    },
    showVersion: function () {
      // what to do if the pkgJSONPath is not passed?
      console.log( readJSON( cliOptions.pkgJSONPath ).version );
    },
    ok: function () {
      var args = [].slice.call( arguments );
      args.unshift( '>>' );

      args = args.map( function ( arg ) {
        return chalk.yellow( arg );
      } );

      console.log.apply( console, args );
    },
    error: function () {
      var args = [].slice.call( arguments );
      args.unshift( '>>' );

      args = args.map( function ( arg ) {
        return chalk.red( arg );
      } );

      console.error.apply( console, args );
    },
    log: function () {
      if ( opts.quiet ) {
        return;
      }
      var args = [].slice.call( arguments );
      args.unshift( chalk.white( '>>' ) );

      console.error.apply( console, args );
    },
    subtle: function () {
      if ( opts.quiet ) {
        return;
      }

      var args = [].slice.call( arguments );
      args.unshift( '>>' );

      args = args.map( function ( arg ) {
        return chalk.gray( arg );
      } );

      console.log.apply( console, args );
    },
    success: function () {
      var args = [].slice.call( arguments );
      args.unshift( '>>' );

      args = args.map( function ( arg ) {
        return chalk.green( arg );
      } );

      console.log.apply( console, args );
    }
  };

  var configFile = cliOptions.configFile;
  var pathToConfig;

  if ( configFile ) {
    // if we have a config file
    // use it. We assume is relative to the current working directory
    if ( opts.config ) {
      pathToConfig = path.resolve( nodeProcess.cwd(), opts.config );
    } else {
      if ( configFile.defaultName ) {
        var localConfig = path.resolve( nodeProcess.cwd(), configFile.defaultName );
        if ( fs.existsSync( localConfig ) ) {
          pathToConfig = localConfig;
        }
      }
      if ( !pathToConfig && configFile.pathToLocalConfig ) {
        pathToConfig = configFile.pathToLocalConfig;
      }
    }

    cli.pathToConfig = pathToConfig;

    cli.getConfig = function () {
      if ( !pathToConfig ) {
        throw new Error( 'Error loading the config file' );
      }
      var cfg;
      cli.subtle( 'Config:', pathToConfig );

      try {
        cfg = readJSON( pathToConfig );
      } catch (ex) {
        throw new Error( sFormat( 'Error loading config {0}, Error: {1}', pathToConfig, ex.message ) );
      }
      return cfg;
    };

    cli.opts = opts;

    return cli;
  }
}; //optionator(  );
