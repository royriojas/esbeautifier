var dispatcher = require( 'dispatchy' );
var extend = require( 'extend' );
var trim = require( 'jq-trim' );
var fs = require( 'fs' );

var beautifier = extend( dispatcher.create(), {
  _init: function ( opts ) {
    var me = this;
    me.opts = opts;
  },
  beautify: function ( files ) {
    var me = this;
    var opts = me.opts;
    //opts = opts || { };

    var cfg = opts.cfg;
    var useCache = !!opts.useCache;
    var checkOnly = !!opts.checkOnly;

    files = files || [ ];

    var cache = require( 'file-entry-cache' ).create( (checkOnly ? '__esbeautifier.check__' : '__esbeautifier__') + trim( opts.cacheId ) );

    if ( !useCache ) {
      cache.deleteCacheFile();
    } else {
      files = cache.getUpdatedFiles( files );
    }

    var esformatter = require( 'esformatter' );

    var write = require( 'write' ).sync;

    var count = 0;

    me.fire( 'beautify:start', { files: files } );

    if ( files.length === 0 ) {
      me.fire( 'done', {
        checkOnly: checkOnly,
        files: files,
        count: count
      } );
      return;
    }

    files.forEach( function ( file ) {
      var source = fs.readFileSync( file, { encoding: 'utf8' } );

      var output;
      try {
        output = esformatter.format( source, cfg );
      } catch (ex) {
        throw new Error( 'Error: ' + file + ':' + ex.lineNumber + ':' + ex.column + ' \n>> ' + ex.message );
      }

      if ( source !== output ) {
        if ( !checkOnly ) {
          write( file, output );
        } else {
          cache.removeEntry( file );
        }
        count++;
        me.fire( 'need:beautify', {
          check: checkOnly,
          file: file,
          count: count
        } );
      }
    } );

    cache.reconcile();
    me.fire( 'done', {
      checkOnly: checkOnly,
      files: files,
      count: count
    } );
  }
} );

module.exports = {
  create: function ( opts ) {
    var ins = Object.create( beautifier );
    ins._init( opts );

    return ins;
  }
};
