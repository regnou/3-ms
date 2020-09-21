//! https://open-wc.org/developing/es-dev-server.html#code-transformation
//? https://www.npmjs.com/package/es-dev-server

// eslint-disable-next-line no-undef
module.exports = {
  port       : 8001,
  watch      : true,
  nodeResolve: true,
  // rootDir    : '0-lib/public/',
  open       : '0-lib/public/index.html',
  /// debug      : true,
  // appIndex: '0-lib/public/index.html',
  /// moduleDirs : ['node_modules', 'custom-modules'],
  middlewares: [
    // function rewriteIndex(context, next) {
    //   if (context.url === "/" || context.url === "/index.html") {
    //     context.url = "/public/index.html";
    //   }
    //   return next();
    // }
  ]
};

///                    88
///                    88
///                    88
///            ,adPPYb,88  ,adPPYba,   ,adPPYba,
///            a8"    `Y88 a8"     "8a a8"     ""
///            8b       88 8b       d8 8b
///            "8a,   ,d88 "8a,   ,a8" "8a,   ,aa
///            `"8bbdP"Y8  `"YbbdP"'   `"Ybbd8"'

/// node-resolve boolean      = Resolve bare import imports using node resolve
/// module-dirs  string/array = Directories to resolve modules from. Used by node-resolve

/// "Bare imports"            = are imports which don't specify a full path to a file:
/// import foo from 'bar';
/// The browser doesn't know where to find this file called bar. The --node-resolve flag resolves this bare import to the actual file path before serving it to the browser:
/// import foo from './node_modules/bar/bar.js';

/// port      number          = The port to use,                uses a random free port if not set.
/// hostname  string          = The hostname to use. Default: localhost
/// open      boolean/string  = Opens the browser on app-index, root dir or a custom path
/// app-index string          = The app's index.html file, sets up history API fallback for SPA routing
/// root-dir  string          = The root directory to serve files from. Default: working directory
/// base-path string          = Base path the app is served on. Example: /my-app
/// config    string          = The file to read configuration from (JS or JSON)
/// help      none            = See all options



