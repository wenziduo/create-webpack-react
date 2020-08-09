/**
 * @description webpackage 出口配置
 * @author wenduo
 */

const path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, '../build'),
    filename: "bundle.js",
    // publicPath: '/outputdist/', // 地址添加前缀
  },
};
