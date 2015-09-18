
# esbeautifier - Changelog
## v4.2.12
- **Enhancements**
  - update esformatter-jsx to support spread operators - [133e10c]( https://github.com/royriojas/esbeautifier/commit/133e10c ), [royriojas](https://github.com/royriojas), 18/09/2015 01:41:40

    
## v4.2.11
- **Bug Fixes**
  - Make sure the right clix module is loaded - [829aafd]( https://github.com/royriojas/esbeautifier/commit/829aafd ), [royriojas](https://github.com/royriojas), 17/08/2015 17:05:11

    
## v4.2.10
- **Enhancements**
  - Update to latest clix - [0d766a2]( https://github.com/royriojas/esbeautifier/commit/0d766a2 ), [royriojas](https://github.com/royriojas), 17/08/2015 03:01:48

    
- **Build Scripts Changes**
  - fix glob expansion when including excluded paths - [4aefc18]( https://github.com/royriojas/esbeautifier/commit/4aefc18 ), [royriojas](https://github.com/royriojas), 15/08/2015 03:59:53

    
## v4.2.9
- **Bug Fixes**
  - Update esformatter-jsx to fix the issue with `ObjectExpression` and `ArrayExpression` inside a `JSXContainerExpression` - [6746cb0]( https://github.com/royriojas/esbeautifier/commit/6746cb0 ), [royriojas](https://github.com/royriojas), 12/08/2015 03:10:23

    
## v4.2.8
- **Build Scripts Changes**
  - update clix dep to get nicer log output - [d2be874]( https://github.com/royriojas/esbeautifier/commit/d2be874 ), [royriojas](https://github.com/royriojas), 11/08/2015 19:39:04

    
## v4.2.7
- **Build Scripts Changes**
  - Add message telling job is done - [23538ed]( https://github.com/royriojas/esbeautifier/commit/23538ed ), [royriojas](https://github.com/royriojas), 11/08/2015 16:47:19

    
- **Tests Related fixes**
  - Remove tmp folder at end of tests - [0fe3664]( https://github.com/royriojas/esbeautifier/commit/0fe3664 ), [royriojas](https://github.com/royriojas), 11/08/2015 16:46:43

    
## v4.2.6
- **Build Scripts Changes**
  - Update to latest clix - [90a219a]( https://github.com/royriojas/esbeautifier/commit/90a219a ), [royriojas](https://github.com/royriojas), 11/08/2015 16:41:55

    
## v4.2.5
- **Build Scripts Changes**
  - Update clix dep - [6dfd3ab]( https://github.com/royriojas/esbeautifier/commit/6dfd3ab ), [royriojas](https://github.com/royriojas), 09/08/2015 04:12:13

    
## v4.2.4
- **Build Scripts Changes**
  - Update dependencies and build scripts - [c004828]( https://github.com/royriojas/esbeautifier/commit/c004828 ), [royriojas](https://github.com/royriojas), 07/08/2015 17:04:12

    
- **Bug Fixes**
  - Downgrade to esformatter@7.0.2 to avoid https://github.com/millermedeiros/esformatter/issues/347 - [fb94fe7]( https://github.com/royriojas/esbeautifier/commit/fb94fe7 ), [royriojas](https://github.com/royriojas), 07/08/2015 17:03:25

    
## v4.2.3
- **Bug Fixes**
  - make sure JSXExpressionContainers are all in the same line - [1db64c3]( https://github.com/royriojas/esbeautifier/commit/1db64c3 ), [royriojas](https://github.com/royriojas), 07/08/2015 13:37:01

    
## v4.2.2
- **Build Scripts Changes**
  - make sure tests are only executed once during bump - [7bd29d1]( https://github.com/royriojas/esbeautifier/commit/7bd29d1 ), [royriojas](https://github.com/royriojas), 07/08/2015 02:26:21

    
  - Update to latest esformatter-jsx - [120bce4]( https://github.com/royriojas/esbeautifier/commit/120bce4 ), [royriojas](https://github.com/royriojas), 07/08/2015 02:25:21

    
## v4.2.1
- **Bug Fixes**
  - nested JSXElements inside JSXExpressionContainers now are properly beautified closes https://github.com/royriojas/esformatter-jsx/issues/13 - [4764230]( https://github.com/royriojas/esbeautifier/commit/4764230 ), [royriojas](https://github.com/royriojas), 06/08/2015 19:47:33

    
## v4.2.0
- **Build Scripts Changes**
  - Add precommit module - [b0ade67]( https://github.com/royriojas/esbeautifier/commit/b0ade67 ), [royriojas](https://github.com/royriojas), 05/08/2015 21:16:09

    
- **Features**
  - Add cacheId option to specify an identifier for the cache file to use - [bbb9316]( https://github.com/royriojas/esbeautifier/commit/bbb9316 ), [royriojas](https://github.com/royriojas), 05/08/2015 21:13:56

    
## v4.1.0
- **Build Scripts Changes**
  - update to latest esformatter and latest esformatter-jsx - [a070b94]( https://github.com/royriojas/esbeautifier/commit/a070b94 ), [royriojas](https://github.com/royriojas), 05/08/2015 03:51:58

    
## v4.0.1
- **Bug Fixes**
  - Include the fix for https://github.com/royriojas/esformatter-jsx/issues/10 to fix selfclosing tags formatting - [95f0423]( https://github.com/royriojas/esbeautifier/commit/95f0423 ), [royriojas](https://github.com/royriojas), 28/07/2015 19:38:06

    
## v4.0.0
- **Enhancements**
  - Use latest esformatter-jsx for more predictable output - [79511b1]( https://github.com/royriojas/esbeautifier/commit/79511b1 ), [royriojas](https://github.com/royriojas), 28/07/2015 05:01:18

    
## v3.2.0
- **Features**
  - Enable the cache by default - [75b45b8]( https://github.com/royriojas/esbeautifier/commit/75b45b8 ), [royriojas](https://github.com/royriojas), 13/07/2015 00:53:34

    **NOTE:**
    
    The cache will work better if the command is executed from the same
    directory. If different set of files are passed the previous seen ones
    will be forgotten. Check the `package.json` for an example of how to
    use this module locally installed instead of globally installed
    
## v3.1.3
- **Refactoring**
  - Allow spaces between Object expression properties - [c05b8c8]( https://github.com/royriojas/esbeautifier/commit/c05b8c8 ), [royriojas](https://github.com/royriojas), 25/06/2015 04:20:31

    
## v3.1.2
- **Enhancements**
  - Make the objects and arrays not inlined if they have nested objects or arrays - [31730fe]( https://github.com/royriojas/esbeautifier/commit/31730fe ), [royriojas](https://github.com/royriojas), 24/06/2015 18:39:11

    
## v3.1.1
- **Build Scripts Changes**
  - Lock dependencies - [0748ff4]( https://github.com/royriojas/esbeautifier/commit/0748ff4 ), [royriojas](https://github.com/royriojas), 24/06/2015 14:20:19

    
## v3.1.0
- **Features**
  - Add `esformatter-collapse-objects` to keep small objects and arrays collapsed - [ea0cd6e]( https://github.com/royriojas/esbeautifier/commit/ea0cd6e ), [royriojas](https://github.com/royriojas), 24/06/2015 14:19:21

    
## v3.0.0
- **Tests Related fixes**
  - Added initial tests for esbeautifier - [ab27ef7]( https://github.com/royriojas/esbeautifier/commit/ab27ef7 ), [royriojas](https://github.com/royriojas), 17/06/2015 05:26:15

    
- **Build Scripts Changes**
  - Update deps - [03deaa0]( https://github.com/royriojas/esbeautifier/commit/03deaa0 ), [royriojas](https://github.com/royriojas), 17/06/2015 01:30:52

    
## v2.2.3
- **Build Scripts Changes**
  - update deps - [bbc4009]( https://github.com/royriojas/esbeautifier/commit/bbc4009 ), [royriojas](https://github.com/royriojas), 16/06/2015 06:44:23

    
## v2.1.0
- **Build Scripts Changes**
  - Update esformatter-jsx dep - [a4c4dd6]( https://github.com/royriojas/esbeautifier/commit/a4c4dd6 ), [royriojas](https://github.com/royriojas), 16/06/2015 06:25:36

    
## v2.0.5
- **Bug Fixes**
  - Fix for missing `done` event when no files need beautification. Fix [#1](https://github.com/royriojas/esbeautifier/issues/1) - [637b216]( https://github.com/royriojas/esbeautifier/commit/637b216 ), [Roy Riojas](https://github.com/Roy Riojas), 26/03/2015 02:44:14

    
## v2.0.4
- **Enhancements**
  - Better error description when file fails beautification - [b780087]( https://github.com/royriojas/esbeautifier/commit/b780087 ), [Roy Riojas](https://github.com/Roy Riojas), 25/03/2015 04:23:48

    
- **Documentation**
  - Update changelog - [f9d7ba0]( https://github.com/royriojas/esbeautifier/commit/f9d7ba0 ), [Roy Riojas](https://github.com/Roy Riojas), 18/03/2015 13:06:28

    
## v2.0.3
- **Enhancements**
  - Include changelog - [6d33a18]( https://github.com/royriojas/esbeautifier/commit/6d33a18 ), [Roy Riojas](https://github.com/Roy Riojas), 18/03/2015 13:05:26

    
## v2.0.2
- **Refactoring**
  - Default config keeps spaces between methods - [0258cab]( https://github.com/royriojas/esbeautifier/commit/0258cab ), [Roy Riojas](https://github.com/Roy Riojas), 18/03/2015 12:59:24

    
## v2.0.1
- **undefined**
  - Add npm bump" - [0d9516d]( https://github.com/royriojas/esbeautifier/commit/0d9516d ), [Roy Riojas](https://github.com/Roy Riojas), 15/03/2015 00:16:03

    This reverts commit 0e6a7dfd19b0133285d2b5452a1d5246dc4f6d41.
    
- **Build Scripts Changes**
  - Add npm bump - [0e6a7df]( https://github.com/royriojas/esbeautifier/commit/0e6a7df ), [Roy Riojas](https://github.com/Roy Riojas), 15/03/2015 00:10:46

    
  - bump major version - [d054c48]( https://github.com/royriojas/esbeautifier/commit/d054c48 ), [Roy Riojas](https://github.com/Roy Riojas), 15/03/2015 00:00:26

    
  - Bump minor version - [bf9f8a1]( https://github.com/royriojas/esbeautifier/commit/bf9f8a1 ), [Roy Riojas](https://github.com/Roy Riojas), 14/03/2015 23:50:21

    
  - Add keywords - [3674a23]( https://github.com/royriojas/esbeautifier/commit/3674a23 ), [Roy Riojas](https://github.com/Roy Riojas), 11/03/2015 06:33:32

    
  - correcting the formatting - [897dd6c]( https://github.com/royriojas/esbeautifier/commit/897dd6c ), [Roy Riojas](https://github.com/Roy Riojas), 10/03/2015 17:12:03

    
  - locking version of esprima to 2.0.0 to avoid try-catch issue - [d6a9977]( https://github.com/royriojas/esbeautifier/commit/d6a9977 ), [Roy Riojas](https://github.com/Roy Riojas), 10/03/2015 17:11:04

    
  - Lock esprima version to fix the issue with esprima formatting try catches poorly - [9525d1c]( https://github.com/royriojas/esbeautifier/commit/9525d1c ), [Roy Riojas](https://github.com/Roy Riojas), 10/03/2015 17:06:33

    
  - Better console messages - [564d77d]( https://github.com/royriojas/esbeautifier/commit/564d77d ), [Roy Riojas](https://github.com/Roy Riojas), 10/03/2015 04:45:10

    
  - Added prepush hook - [b7559f4]( https://github.com/royriojas/esbeautifier/commit/b7559f4 ), [Roy Riojas](https://github.com/Roy Riojas), 10/03/2015 04:24:25

    
  - remove unused dep - [0fcb907]( https://github.com/royriojas/esbeautifier/commit/0fcb907 ), [Roy Riojas](https://github.com/Roy Riojas), 09/03/2015 12:56:41

    
  - Add code style checker - [2ace4eb]( https://github.com/royriojas/esbeautifier/commit/2ace4eb ), [Roy Riojas](https://github.com/Roy Riojas), 09/03/2015 12:45:48

    
  - Bump minor version - [57ab36a]( https://github.com/royriojas/esbeautifier/commit/57ab36a ), [Roy Riojas](https://github.com/Roy Riojas), 09/03/2015 05:06:04

    
- **Refactoring**
  - redefined exposed event names - [a8d58a7]( https://github.com/royriojas/esbeautifier/commit/a8d58a7 ), [Roy Riojas](https://github.com/Roy Riojas), 14/03/2015 23:59:19

    
  - Move common code to clix - [ee1d87c]( https://github.com/royriojas/esbeautifier/commit/ee1d87c ), [Roy Riojas](https://github.com/Roy Riojas), 11/03/2015 06:23:45

    
  - Refactor code to make the cli module reusable - [f9e5b6a]( https://github.com/royriojas/esbeautifier/commit/f9e5b6a ), [Roy Riojas](https://github.com/Roy Riojas), 11/03/2015 05:05:04

    
- **Enhancements**
  - Add `beautify:start` event - [3ff9ca4]( https://github.com/royriojas/esbeautifier/commit/3ff9ca4 ), [Roy Riojas](https://github.com/Roy Riojas), 14/03/2015 23:49:25

    
  - linted and beautified code - [776dce1]( https://github.com/royriojas/esbeautifier/commit/776dce1 ), [Roy Riojas](https://github.com/Roy Riojas), 09/03/2015 04:45:19

    
  - Use dispatchy for the event emmitter - [b1553a7]( https://github.com/royriojas/esbeautifier/commit/b1553a7 ), [Roy Riojas](https://github.com/Roy Riojas), 09/03/2015 04:40:02

    
- **Documentation**
  - Updated docs - [c8396e6]( https://github.com/royriojas/esbeautifier/commit/c8396e6 ), [Roy Riojas](https://github.com/Roy Riojas), 11/03/2015 05:17:08

    
  - Better Readme - [c56210c]( https://github.com/royriojas/esbeautifier/commit/c56210c ), [Roy Riojas](https://github.com/Roy Riojas), 09/03/2015 04:50:53

    
- **Features**
  - Add checkOnly mode and useCache - [9eefc9b]( https://github.com/royriojas/esbeautifier/commit/9eefc9b ), [Roy Riojas](https://github.com/Roy Riojas), 10/03/2015 04:14:43

    
  - First commit - [654f6ae]( https://github.com/royriojas/esbeautifier/commit/654f6ae ), [Roy Riojas](https://github.com/Roy Riojas), 08/03/2015 15:48:41

    
- **Tests Related fixes**
  - Add first test - [922274f]( https://github.com/royriojas/esbeautifier/commit/922274f ), [Roy Riojas](https://github.com/Roy Riojas), 09/03/2015 05:05:37

    
- **Other changes**
  - Initial commit - [cd8ed5a]( https://github.com/royriojas/esbeautifier/commit/cd8ed5a ), [Roy Riojas](https://github.com/Roy Riojas), 08/03/2015 14:43:08

    
