var dispatcher = require( 'dispatchy' );
var extend = require( 'extend' );
var fs = require( 'fs' );
var hash = require( 'hash-string' );
var fileEntryCache = require( 'file-entry-cache' );

var beautifier = extend( dispatcher.create(), {
  _init: function ( opts ) {
    var me = this;
    me.opts = opts;
  },

  _checkHashOfConfig: function ( fEntryCache, opts ) {
    var me = this;
    var configHashPersisted = fEntryCache.cache.getKey( 'configHash' );

    var hashOfConfig = hash( JSON.stringify( opts ) );
    var ignoreCache = configHashPersisted !== hashOfConfig;

    if ( ignoreCache ) {
      fEntryCache.destroy();
      fEntryCache.cache.setKey( 'configHash', hashOfConfig );

      me.fire( 'ignore:cache', { previousHash: configHashPersisted, currentHash: hashOfConfig } );
    }
  },

  beautify: function ( files ) {
    var me = this;
    var opts = me.opts;

    var cfg = opts.cfg;
    var useCache = !!opts.useCache;
    var checkOnly = !!opts.checkOnly;

    files = files || [ ];

    var cacheId = opts.cacheId ? opts.cacheId : hash( process.cwd() );

    var fEntryCache = fileEntryCache.create( (checkOnly ? '__esbeautifier.check__' : '__esbeautifier__') + cacheId );

    if ( !useCache ) {
      fEntryCache.destroy();
    } else {
      me._checkHashOfConfig( fEntryCache, opts );
    }

    files = fEntryCache.getUpdatedFiles( files );

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
          fEntryCache.removeEntry( file );
        }
        count++;
        me.fire( 'need:beautify', {
          check: checkOnly,
          file: file,
          count: count
        } );
      }
    } );

    fEntryCache.reconcile();
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
