/**
 * @description webpackage 出口配置
 * @author wenduo
 */

const { publicPath, distPath } = require("./commonPath");

module.exports = {
  output: {
    path: distPath,
    filename: "bundle.js",
    publicPath: publicPath, // 地址添加前缀
  },
};
