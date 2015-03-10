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
      description: 'Path to your `esformatter` config, if not provided will try to use the `.esformatter` file in your current working directory, if not found will use the one provided with the package'
    },
    {
      option: 'checkOnly',
      alias: 'k',
      type: 'Boolean',
      description: 'Will just run the beautifier and report which files need to be beautified'
    },
    {
      option: 'useCache',
      alias: 'u',
      type: 'Boolean',
      description: 'If true, this module will remember the `mtime` and `size` of the module and only operate on the ones that changed. If false, the cache will be destroyed. Cache will only be kept between executions with the useCache flag set to true.'
    },
    {
      option: 'version',
      alias: 'v',
      type: 'Boolean',
      description: 'Outputs the version number'
    }
  ]
} );
