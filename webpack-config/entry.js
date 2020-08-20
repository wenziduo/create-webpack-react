/**
 * @description webpackage 入口配置
 * @author wenduo
 */

const { indexJS } = require("./commonPath");

module.exports = {
  entry: {
    entry: ["webpack-hot-middleware/client?noInfo=true&reload=true", indexJS],
    // entry: path.join(__dirname, "../src/app.js"),
  },
};
