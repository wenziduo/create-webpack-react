const { NODE_ENV } = process.env;
const path = require('path');

module.exports = {
	host: '127.0.0.1',
	port: NODE_ENV === 'dev' ? 7007 : NODE_ENV === 'test' ? 7008 : 7006, // 设置启动端口,
	distPath: path.join(__dirname, 'dist'), // 设置静态访问文件路径
	historyApiFallback: true, // 重定向
	webpackDevMiddleware: {
		noInfo: true, // 显示无信息到控制台（仅警告和错误）
		quiet: true, // 向控制台显示任何内容
		// lazy: true, // 切换到延迟模式 // 这意味着没有观看，而是重新编译每个请求
		// watchOptions: { aggregateTimeout: 300, poll: true }, // watch options (only lazy: false)
		// publicPath: publicPath, //绑定中间件的公共路径,与webpack配置的路径相同
		index: 'index.html', // Web服务器的索引路径，默认为“index.html”。
		// 如果falsy（但不是未定义），服务器将不会响应到根URL的请求。
		// headers: { "X-Custom-Header": "yes" }, // 自定义标题
		// mimeTypes: { "text/html": [ "phtml" ] }, // 添加自定义mime /扩展映射
		// https://github.com/broofa/node-mime#mimedefine
		// https://github.com/webpack/webpack-dev-middleware/pull/150
		stats: { colors: true }, // 用于形成统计信息的选项
		// reporter: null, // 提供自定义记录器来更改日志显示的方式。
		// serverSideRender: false, // 关闭服务器端渲染模式。有关详细信息，请参阅服务器端渲染部分。
	},
	webpackHotMiddleware: {},
	proxy: {
		from: '/api',
		to: 'http://b2b-reconfiguration-testa.weimeng-hosp.com',
		secure: false,
		changeOrigin: true,
		pathRewrite: {
			'^/api': '/',
		},
	},
};
