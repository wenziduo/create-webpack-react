module.exports = {
  entry: __dirname + "/src/app.js", //默认配置：./src/index.js
  output: {
    path: __dirname + "/build", //默认配置：/dist
    filename: "bundle.js", //默认配置：main.js
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          // plugins: ["transform-runtime"],
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
    ],
  },
  devServer: {
    hot: true,
    open: true,
    port: 9527,
    compress: true,
    contentBase: "./public",
  },
};
