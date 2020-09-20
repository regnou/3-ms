import { string } from 'rollup-plugin-string';
// import typescript from '@rollup/plugin-typescript';
import babel      from 'rollup-plugin-babel';
// import OMT        from '@surma/rollup-plugin-off-main-thread';
// import replace    from '@rollup/plugin-replace';
// import compiler   from '@ampproject/rollup-plugin-closure-compiler';
import nodeResolve    from '@rollup/plugin-node-resolve';

// // The version of Chromium used by Samsung Internet 11.x.
const BROWSER_TARGET = {
  browsers: ['chrome >= 75'],
};

// // The version of node used in Firebase Cloud Functions.
const NODE_TARGET = {
  node: '10',
};

export default [

// CLIENT
//. - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
{
  input   : '0-lib/public/src/3-app/1-catalogue/ws-catalogue.js',
  external: [
        'lit-element',
      ],
  // input: '1-dist/ts/public/1-app/app.js',
  plugins: [
    nodeResolve({
      browser: true,
    }),
    // typescript({ include: ["src/*.js", "src/**/*.js"] }),
    // babel({
    //   presets: [['@babel/preset-env', {
    //     targets: BROWSER_TARGET,
    //     modules: false,
    //   }]],
    // }),
    // compiler(),
  ],
  output: {
    // dir: 'dist',
    file     : '1-dist/public/src/3-app/wc-catalogue.js',
    format   : 'iife',
    sourcemap: true,
  },
},




// SERVER
//? - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//   {
//   input: '0-src/functions/index.js',
//   // input: '1-dist/ts/function/server.js',
//   external: [
//     '@popeindustries/lit-html-server',
//     '@popeindustries/lit-html-server/directives/unsafe-html',
//     'axios',
//     'express',
//     'firebase-functions',
//     'https',
//     'html-escaper',
//     'lru-cache',
//   ],
//   plugins: [
//     string({
//       // decommenter ci dessous lorsque USE PARITALS
//       // include: '1-dist/public/0-static/partials/**/*.html',
//       include: '0-src/public/0-static/html/partials/**/*.html',
//     }),
//     babel({
//       presets: [['@babel/preset-env', {
//         targets: NODE_TARGET,
//         modules: false,
//       }]],
//     }),
//   ],
//   output: {
//     file  : '1-dist/functions/index.js',
//     format: 'cjs',
//     sourcemap: true
//   },
// },





// SW
//° - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// {
//   input: '0-src-dist-js/service-worker.js',
//   manualChunks: (id) => {
//     if (!id.includes('/node_modules/')) {
//       return undefined;
//     }

//     const chunkNames = [
//       'lit-html',
//       'html-escaper',
//       'regexparam',
//       'workbox',
//     ];

//     return chunkNames.find((chunkName) => id.includes(chunkName)) || 'misc';
//   },
//   plugins: [
//     replace({
//       'process.env.NODE_ENV': JSON.stringify(
//         process.env.NODE_ENV || 'development'),
//     }),
//     resolve({
//       browser: true,
//     }),
//     babel({
//       presets: [['@babel/preset-env', {
//         targets: BROWSER_TARGET,
//         modules: false,
//       }]],
//     }),
//     OMT(),
//     compiler(),
//   ],
//   output: {
//     dir: 'build',
//     format: 'amd',
//   },
// },
];





// import merge from 'deepmerge';
// /// use createSpaConfig for bundling a Single Page App
// import { createSpaConfig } from '@open-wc/building-rollup';

// /// use createBasicConfig to do regular JS to JS bundling
// /// import { createBasicConfig } from '@open-wc/building-rollup';

// const baseConfig = createSpaConfig({
//   /// use the outputdir option to modify where files are output
//   /// outputDir: 'dist',

//   /// if you need to support older browsers, such as IE11, set the legacyBuild
//   /// option to generate an additional build just for this browser
//   /// legacyBuild: true,

//   /// development mode creates a non-minified build for debugging or development
//   developmentMode: process.env.ROLLUP_WATCH === 'true',

//   /// set to true to inject the service worker registration into your index.html
//   injectServiceWorker: false,
// });

// export default merge(baseConfig, {
//   /// if you use createSpaConfig, you can use your index.html as entrypoint,
//   /// any <script type="module"> inside will be bundled by rollup
//   input: './index.html',

//   /// alternatively, you can use your JS as entrypoint for rollup and
//   /// optionally set a HTML template manually
//   /// input: './app.js',
// });

