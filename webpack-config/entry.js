/**
 * @description webpackage 入口配置
 * @author wenduo
 */

const path = require("path");

module.exports = {
  entry: {
    entry: ["webpack-hot-middleware/client?noInfo=true&reload=true", path.join(__dirname, "../src/app.js")],
    // entry: path.join(__dirname, "../src/app.js"),
  },
};
