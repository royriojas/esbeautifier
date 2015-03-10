var dispatcher = require( 'dispatchy' );
var merge = require( 'lodash.merge' );

module.exports = merge( dispatcher.create(), {
  beautify: function ( files, opts ) {
    var me = this;
    opts = opts || {};

    var cfg = opts.cfg;
    var useCache = !!opts.useCache;
    var checkOnly = !!opts.checkOnly;

    files = files || [];

    var cache = require( 'file-entry-cache' ).create( checkOnly ? '__esbeautifier.check__' : '__esbeautifier__' );

    if ( !useCache ) {
      cache.deleteCacheFile();
    } else {
      files = cache.getUpdatedFiles( files );
    }

    var esformatter = require( 'esformatter' );
    var read = require( 'read-file' ).readFileSync;
    var write = require( 'write' ).sync;

    var count = 0;

    files.forEach( function ( file ) {
      var source = read( file );

      var output = esformatter.format( source, cfg );

      if ( source !== output ) {
        if ( !checkOnly ) {
          write( file, output );
        } else {
          cache.removeEntry( file );
        }
        count++;
        me.fire( checkOnly ? 'need:beautify' : 'beautify', {
          file: file,
          count: count
        } );
      }
    } );

    cache.reconcile();
    me.fire( checkOnly ? 'check:done' : 'done', {
      files: files,
      count: count
    } );
    //console.log('files received', files.length, 'beautified', count);
  }
} );
