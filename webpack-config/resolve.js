/**
 * @description webpackage 模块配置
 * @author wenduo
 */

const { srcPath } = require('./commonPath');

module.exports = {
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
		alias: {
			'@': srcPath, // 这样@符号就表示项目根目录中src这一层路径
		},
	},
};
