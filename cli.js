module.exports = {
  dirname: __dirname,
  beautify: function ( args ) {
    var sFormat = require( 'stringformat' );
    var path = require( 'path' );
    var process = require( './process' );
    var options = require( './options' );
    var opts = options.parse( args );
    var fs = require( 'fs' );

    var readJSON = require( 'read-json-sync' );
    var expand = require( 'glob-expand' );

    if ( opts.help ) {
      console.log( options.generateHelp() );
      return;
    }

    var files = opts._.map( function ( glob ) {
      return path.resolve( process.cwd(), glob );
    } );

    files = expand.apply( null, files );

    var pathToConfig;
    if ( !opts.config ) {
      var localConfig = path.resolve( process.cwd(), './.esformatter' );
      pathToConfig = fs.existsSync( localConfig ) ? localConfig : path.resolve( this.dirname, 'configs/.esformatter.json' );
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
      require( './index' )( files, cfg )
    } catch (ex) {
      throw new Error( sFormat( 'error trying to format files {0}, Error: {1}', JSON.stringify( opts, null, 2 ), ex.message ) );
    }
  }
};
