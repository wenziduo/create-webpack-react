/**
 * @description webpackage 配置文件
 * @author wenduo
 */
const path = require("path");
module.exports = {
  entry: require("./entry").entry,
  output: require("./output").output,
  module: require("./loader").module,
  plugins: require("./plugins").plugins,
  // devServer: require("./devServer").devServer,
  resolve: require("./resolve").resolve,
};
