const WebpackPwaManifest = require('webpack-pwa-manifest');
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
  }, plugins: [
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

