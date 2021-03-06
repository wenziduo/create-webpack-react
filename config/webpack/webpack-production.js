/**
 * @description webpackage 配置文件（build）
 * @author wenduo
 */
const osSize = require('os').cpus().length; // 获取计算机核数
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack'); // 导入多线程打包
const happyThreadPool = HappyPack.ThreadPool({ size: osSize }); // 创建一个 HappyThreadPool，作为所有 loader 共用的线程池
const { indexHTML, srcPath, indexJS, distPath, publicPath } = require('../commonPath');
const antdTheme = require('../antd-theme'); // antd 风格配置

module.exports = {
	entry: ['webpack-hot-middleware/client?noInfo=true&reload=true', indexJS],
	output: {
		path: distPath,
		publicPath: publicPath, // 地址添加前缀
		filename: '[name].[hash:8].js',
		chunkFilename: '[name].[chunkhash:8].js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/, // 匹配js、jsx、ts、tsx文件
				exclude: /node_modules/,
				use: 'happypack/loader?id=js',
			},
			{
				test: /\.less$/, // 匹配less文件
				use: 'happypack/loader?id=less',
			},
			{
				test: /\.css$/, // 匹配css文件
				use: 'happypack/loader?id=css',
			},
			{
				test: /\.(png|jpg|gif|svg)$/, // 匹配图片文件
				loader: 'file-loader',
			},
		],
	},
	plugins: [
		// html 插件
		new HtmlWebpackPlugin({
			template: indexHTML,
		}),
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
		new HappyPack({
			id: 'js',
			threads: 4,
			threadPool: happyThreadPool, // 用于检索工作线程的预定义线程池
			verbose: true, // 启用此选项可将状态消息从HappyPack记录到STDOUT
			loaders: [
				{
					loader: require.resolve('babel-loader'),
					options: {
						plugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]],
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
				},
				{
					loader: require.resolve('less-loader'),
					options: {
						lessOptions: {
							javascriptEnabled: true,
							modifyVars: antdTheme,
						},
					},
				},
			],
		}),
		new webpack.DefinePlugin({
			NICE_FEATURE: JSON.stringify(true),
			NODE_ENV: JSON.stringify(process.env.NODE_ENV),
		}),
	],
	mode: 'production',
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
		alias: {
			'@': srcPath, // 这样@符号就表示项目根目录中src这一层路径
		},
	},
};
