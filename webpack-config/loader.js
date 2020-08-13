/**
 * @description webpackage loader配置
 * @author wenduo
 */

const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // 匹配js、jsx、ts、tsx文件
        exclude: /node_modules/,
        use: "Happypack/loader?id=js&ts",
      },
      {
        test: /\.css$/, // 匹配css文件
        use: "Happypack/loader?id=css",
      },
    ],
  },
};
