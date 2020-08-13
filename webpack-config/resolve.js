/**
 * @description webpackage 模块配置
 * @author wenduo
 */

const path = require("path");

module.exports = {
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.jsx' ],
    alias: {
      "@": path.join(__dirname, "../src"), // 这样@符号就表示项目根目录中src这一层路径
    },
  },
};
