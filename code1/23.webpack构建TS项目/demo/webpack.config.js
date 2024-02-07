const { Configuration } = require("webpack");
const path = require("node:path");
const htmlwebpackplug = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const cssExtractPlugin  = require("mini-css-extract-plugin")
/**
 * @type {Configuration}
 */
const config = {
  mode: "development",
  entry: "./src/main.ts", // 入口文件
  output: {
    path: path.resolve(__dirname, "./dist"), // 生成目录
    filename: "[chunkhash].js", // 打包文件名
    clean: true, // 清理dist目录
  },
  stats: "errors-only",
  module: {
    rules: [
      {
        test: /\.ts$/,
        // use: "ts-loader", //处理ts文件
        use: {
          loader: "ts-loader",
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader"],
        use: [cssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/,
        // use: ["style-loader", "css-loader", "less-loader"],
        use: [cssExtractPlugin.loader, "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new htmlwebpackplug({
      template: "./index.html", //模板
    }),
    new VueLoaderPlugin(),
    new cssExtractPlugin()
  ],
  //代码分包
  optimization: {
    splitChunks: {
      cacheGroups: {
        moment: {
          test: /node_modules[\\/]moment/,
          name: "moment",
          chunks: "all",
        },
        common:{
          name:"common",
          chunks:"all",
          minChunks:2 //他的引用次数大于2就会被分割出来
        }
      },
    },
  },
};

module.exports = config;
