/**
 * @description webpackage loader配置
 * @author wenduo
 */

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/, // 匹配js文件
        exclude: /node_modules/,
        use: "Happypack/loader?id=js",
        // loader: "babel-loader",
        // query: {
        //   // plugins: ["transform-runtime"],
        //   // presets: ["es2015", "react", "stage-2"],
        //   presets: ["@babel/preset-env"],
        // },
      },
      {
        test: /\.css$/, // 匹配css文件
        use: "Happypack/loader?id=css",
        // loader: "style-loader!css-loader",
      },
      {
        test: /\.less$/, // 匹配less文件
        use: "Happypack/loader?id=css",
      },
    ],
  },
};
