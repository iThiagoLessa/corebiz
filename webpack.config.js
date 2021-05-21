const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "delevopment",
  entry: "./src/index.js",
  outpupt: {
    filnemane: "bundle.js",
    path: __dirname + "public",
  },
  devServer: {
    contentBase: "./public",
    port: 8000,
  },
  resolve: {
    extensions: [".js", "jsx"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exlude: /node_modules/,
        user: ["babel-loader"],
      },
      {
        test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
        use: ["file-loader"],
      },
      {
          test: /\.s[ac]ss$/i,
          use:[
              MiniCssExtractPlugin.loader,
              "css-loader",
              "sass-loader",
          ]
      },
    ],
  },
};
