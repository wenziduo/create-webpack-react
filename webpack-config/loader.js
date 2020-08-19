/**
 * @description webpackage loader配置
 * @author wenduo
 */

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // 匹配js、jsx、ts、tsx文件
        exclude: /node_modules/,
        use: "happypack/loader?id=js",
      },
      // {
      //   test: /\.(ts|tsx)$/, // 匹配js、jsx、ts、tsx文件
      //   exclude: /node_modules/,
      //   use: "happypack/loader?id=ts",
      // },
      {
        test: /\.less$/, // 匹配less文件
        // use: [MiniCssExtractPlugin.loader, "happypack/loader?id=less"],
        use: "happypack/loader?id=less",
        // use: [
        //   // MiniCssExtractPlugin.loader,
        //   "style-loader",
        //   "css-loader",
        //   // "postcss-loader", // postcss-loader 可选
        //   {
        //     loader: "less-loader",
        //     options: {
        //       lessOptions: {
        //         javascriptEnabled: true
        //       }
        //     }
        //   },
        // ],
      },
      {
        test: /\.css$/, // 匹配css文件
        // use: [MiniCssExtractPlugin.loader, "happypack/loader?id=css"],
        use: "happypack/loader?id=css"
        // use: [
        //   // MiniCssExtractPlugin.loader,
        //   "style-loader",
        //   "css-loader",
        //   // "postcss-loader", // postcss-loader 可选
        // ],
      },
    ],
  },
};
