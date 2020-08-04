/**
 * @description webpackage 服务配置
 * @author wenduo
 */

const path = require("path");

module.exports = {
  devServer: {
    hot: true,
    open: false,
    port: 7006,
    compress: true,
    contentBase: path.join(__dirname, "../public"),
    // proxy: {
    //   // proxy URLs to backend development server
    //   "/api": "http://localhost:3000",
    // },
    // contentBase: path.join(__dirname, "dist"), // boolean | string | array, static file location
    // compress: true, // enable gzip compression
    // historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    // hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    // https: false, // true for self-signed, object for cert authority
    // noInfo: true, // only errors & warns on hot reload
  },
};
