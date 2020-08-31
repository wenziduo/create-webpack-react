/**
 * @description webpackage 插件配置
 * @author wenduo
 */

const osSize = require('os').cpus().length; // 获取计算机核数
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack'); // 导入多线程打包
const happyThreadPool = HappyPack.ThreadPool({ size: osSize }); // 创建一个 HappyThreadPool，作为所有 loader 共用的线程池
const { indexHTML, srcPath } = require('./commonPath');

module.exports = {
	plugins: [
		// html 插件
		new HtmlWebpackPlugin({
			template: indexHTML,
		}),
		// js声明多线程打包
		// new HappyPack({
		//   id: "js",
		//   use: ["babel-loader"],
		//   threadPool: happyThreadPool, // 用于检索工作线程的预定义线程池
		//   verbose: true, // 启用此选项可将状态消息从HappyPack记录到STDOUT
		// }),
		// //css 多线程打包
		// new HappyPack({
		//   id: "css",
		//   use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
		//   threadPool: happyThreadPool, // 用于检索工作线程的预定义线程池
		//   verbose: true, // 启用此选项可将状态消息从HappyPack记录到STDOUT
		// }),
		new HappyPack({
			id: 'loader-pre',
			threads: 4,
			threadPool: happyThreadPool, // 用于检索工作线程的预定义线程池
			verbose: true, // 启用此选项可将状态消息从HappyPack记录到STDOUT
			loaders: [
				{
					options: {
						// formatter: eslintFormatter,
						eslintPath: require.resolve('eslint'),
						enforce: 'pre',
						include: srcPath,
						exclude: /node_modules/,
						options: {
							fix: true,
						},
					},
					loader: require.resolve('eslint-loader'),
				},
			],
		}),
		// new HappyPack({
		//   id: "ts-pre",
		//   threads: 4,
		//   threadPool: happyThreadPool, // 用于检索工作线程的预定义线程池
		//   verbose: true, // 启用此选项可将状态消息从HappyPack记录到STDOUT
		//   loaders: [
		//     {
		//       options: {
		//         // formatter: eslintFormatter,
		//         eslintPath: require.resolve("tslint"),
		//       },
		//       loader: require.resolve("tslint-loader"),
		//     },
		//   ],
		// }),
		new HappyPack({
			id: 'js',
			threads: 4,
			threadPool: happyThreadPool, // 用于检索工作线程的预定义线程池
			verbose: true, // 启用此选项可将状态消息从HappyPack记录到STDOUT
			loaders: [
				{
					loader: require.resolve('babel-loader'),
					options: {
						plugins: [
							// ["b-rc", { style: true }],
							// [
							//   'import', [{libraryName: 'b-rc-m', style: true}]
							// ],
							// "ramda",
						],
						compact: true,
					},
				},
			],
		}),
		new HappyPack({
			id: 'css',
			threads: 4,
			threadPool: happyThreadPool, // 用于检索工作线程的预定义线程池
			verbose: true, // 启用此选项可将状态消息从HappyPack记录到STDOUT
			loaders: ['style-loader', 'css-loader', 'less-loader'],
			// loaders: [
			//   // {
			//   //   loader: require.resolve("style-loader"),
			//   // },
			//   {
			//     loader: require.resolve("css-loader"),
			//     // options: {
			//     //   importLoaders: 1,
			//     //   minimize: true,
			//     //   sourceMap: false,
			//     // },
			//   },
			//   // {
			//   //   loader: require.resolve("postcss-loader"),
			//   // },
			// ],
		}),
		new HappyPack({
			id: 'less',
			threads: 4,
			threadPool: happyThreadPool, // 用于检索工作线程的预定义线程池
			verbose: true, // 启用此选项可将状态消息从HappyPack记录到STDOUT
			loaders: [
				{
					loader: require.resolve('style-loader'),
				},
				{
					loader: require.resolve('css-loader'),
					// options: {
					//   importLoaders: 1,
					//   minimize: true,
					//   sourceMap: true,
					// },
				},
				// {
				//   loader: require.resolve("postcss-loader"),
				// },
				{
					loader: require.resolve('less-loader'),
					options: {
						lessOptions: {
							javascriptEnabled: true,
						},
					},
				},
			],
		}),
		new webpack.DefinePlugin({
			NICE_FEATURE: JSON.stringify(true),
			NODE_ENV: JSON.stringify(process.env.NODE_ENV),
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
		}),
		new webpack.ProgressPlugin(), // 显示打包进度
		// new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(), // 启动HMR
		new webpack.NoEmitOnErrorsPlugin(), // 在编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段。这样可以确保输出资源不会包含错误。
	],
};
