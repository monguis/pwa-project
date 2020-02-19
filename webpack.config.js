const config = {
  entry: {
    app: "./src/app.js",
    chart: "./src/expenseChart.js",
    elements: "./src/elements.js",
    calculations:"./src/calculations.js",
    indexedDb : "./src/indexedDb.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
module.exports = config;
