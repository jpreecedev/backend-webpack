const config = {
  target: "node",
  mode: "development",
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
