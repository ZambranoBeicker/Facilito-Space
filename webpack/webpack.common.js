const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpack = new htmlWebpackPlugin({
  template: "./assets/index.template.html",
  filename: "index.html",
});

module.exports = {
  entry: "./assets/javascript/entry.js",
  output: {
    publicPath: "/",
    path: path.join(__dirname, ".."),
    filename: "dist/javascript/bundle.js",
  },

  plugins: [htmlWebpack],
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        loader: "url-loader",
      },
    ],
  },
};
