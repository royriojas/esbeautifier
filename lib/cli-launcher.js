var console = require( './console' );
var chalk = require( 'chalk' );

module.exports = {
  launch: function ( cliOptions, callback ) {

    var nodeProcess = require( './process' );

    var program = require( './cli-options' )( cliOptions, nodeProcess.argv );

    var opts = program.opts;

    if ( opts.help ) {
      program.showHelp();
      return;
    }
    if ( opts.version ) {
      program.showVersion();
      return;
    }

    var me = this;

    try {
      callback && callback( program );
    } catch (ex) {

      var args = {
        error: ex
      };

      if ( me.onError ) {
        me.onError( args );
      }
      if ( args.handled ) {
        return;
      }

      console.error( chalk.red( '>>' ), ex.message );
      nodeProcess.exit( 1 );
    }
  }
};
