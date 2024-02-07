const path = require("path");
const htmlwebpackplug = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },

  devServer: {
    port: 1988,
    proxy: {}, //代理
  },
  resolve: {
    extensions: [".js", ".ts"], //匹配后缀
  },
  plugins: [
    new htmlwebpackplug({
      template: "./public/index.html",
    }),
  ],
};
