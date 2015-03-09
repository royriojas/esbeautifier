var dispatcher = require( 'dispatchy' );
var merge = require( 'lodash.merge' );

module.exports = merge( dispatcher.create(), {
  beautify: function ( files, cfg ) {
    var me = this;
    var esformatter = require( 'esformatter' );
    var read = require( 'read-file' ).readFileSync;
    var write = require( 'write' ).sync;

    var count = 0;
    files.forEach( function ( file ) {
      var source = read( file );

      var output = esformatter.format( source, cfg );

      if ( source !== output ) {
        write( file, output );
        count++;
        me.fire( 'beautify', {
          file: file,
          count: count
        } );
      }
    } );

    me.fire( 'done', {
      files: files,
      beautified: count
    } );
    //console.log('files received', files.length, 'beautified', count);
  }
} );
