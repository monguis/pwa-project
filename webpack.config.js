const WebpackPwaManifest = require('webpack-pwa-manifest');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const path = require("path")

const config = {
  entry: "./src/app.js",
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    }]
  }, plugins: [new SWPrecacheWebpackPlugin({
    cacheId: "my-domain-cache-id",
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    filename: "service-worker.js",
    minify: true,
    staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/]
  }),
  new WebpackPwaManifest({
    name: 'Budget App',
    short_name: 'Budget',
    description: 'My awesome Progressive Web App!',
    background_color: '#ffffff',
    icons: [
      {
        src: path.resolve('public/assets/images/budget_25363.ico'),
        sizes: [128] // multiple sizes
      }
    ]
  })
  ]
};
module.exports = config;

