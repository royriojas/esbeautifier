var path = require( 'path' );

module.exports = {
  pkgJSONPath: path.resolve( __dirname, '../package.json' ),
  configFile: {
    defaultName: '.esformatter',
    pathToLocalConfig: path.resolve( __dirname, '../configs/esformatter.json' ),
    description: 'Path to your `esformatter` config, if not provided will try to use the `.esformatter` file in your current working directory, if not found will use the one provided with this package'
  },
  //useDefaultOptions: true,
  optionator: {
    prepend: 'Usage: esbeautifier [options] glob [glob1] [glob2]..[globN]',
    options: [
      {
        heading: 'Options'
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
        description: 'If true, this module will remember the `mtime` and `size` of the beatufied files and only operate on the ones that changed. If false, the cache will be destroyed. Cache will only be kept between executions with the useCache flag set to true.'
      }
    ]
  }
};
