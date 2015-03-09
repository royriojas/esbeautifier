'use strict';
var optionator = require( 'optionator' );
module.exports = optionator( {
  prepend: 'esbeautifier [globs] [options]',
  concatRepeatedArrays: true,
  mergeRepeatedObjects: true,
  options: [
    {
      heading: 'Options'
    },
    {
      option: 'help',
      alias: 'h',
      type: 'Boolean',
      description: 'Show this help'
    },
    {
      option: 'config',
      alias: 'c',
      type: 'path::String',
      description: 'path to your esformatter config'
    },
    {
      option: 'version',
      alias: 'v',
      type: 'Boolean',
      description: 'Outputs the version number'
    }
  ]
} );
