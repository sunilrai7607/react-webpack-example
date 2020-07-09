const path = require("path");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "./src"),
    // compress: true,
    // port: 9000,
    historyApiFallback: true,
  },
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
