'use strict';
var optionator = require( 'optionator' );
module.exports = optionator( {
  prepend: 'Usage: esbeautifier [options] glob [glob1] [glob2]..[globN]',
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
      description: 'path to your esformatter config, if not provided will try to use the `.esformatter` file in your current working directory, if not found will use the one provided with the package'
    },
    {
      option: 'version',
      alias: 'v',
      type: 'Boolean',
      description: 'Outputs the version number'
    }
  ]
} );
