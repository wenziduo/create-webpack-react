/**
 * @description webpackage 模块配置
 * @author wenduo
 */

const path = require("path");
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  mode: NODE_ENV === 'production' ? "production" : "development",
};
