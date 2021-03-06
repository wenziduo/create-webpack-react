import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import qs from 'qs';
console.log(`current environment: %c${NICE_FEATURE}`, 'color: skyBlue; font-size: 17px;');

interface BaseRequestProps {
	get: (url: string, config: AxiosRequestConfig) => Promise<any>;
	post: (url: string, data: any, config: AxiosRequestConfig) => Promise<any>;
	put: (url: string, data: any, config: AxiosRequestConfig) => Promise<any>;
	delete: (url: string, config: AxiosRequestConfig) => Promise<any>;
}

class BaseRequest implements BaseRequestProps {
	private $http: AxiosInstance;
	private dataMethodDefaults: AxiosRequestConfig;
	private cancelTokens = [];
	// 取消相同的多次请求
	private cancel = ({ method, url, data }) => {
		const urlToken = `${method}-${url}-${qs.stringify(data)}`;
		const currIndex = this.cancelTokens.findIndex((ele) => ele.urlToken === urlToken);
		const curr = this.cancelTokens.find((ele) => ele.urlToken === urlToken);
		if (curr) {
			this.cancelTokens.splice(currIndex, 1);
			curr.cancel('Operation canceled');
		}
		const CancelToken = axios.CancelToken;
		const source = CancelToken.source();
		this.cancelTokens.push({
			urlToken,
			cancel: source.cancel,
		});
		return {
			token: source.token,
		};
	};
	constructor() {
		this.$http = axios.create({
			baseURL: '/api/b2b',
			withCredentials: true, // 允许携带cookie
		});
		this.dataMethodDefaults = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			transformRequest: [
				function (data) {
					return qs.stringify(data);
				},
			],
		};
		// 添加请求拦截器
		this.$http.interceptors.request.use(
			function (config) {
				// 在发送请求之前做些什么
				return config;
			},
			function (error) {
				// 对请求错误做些什么
				return Promise.reject(error);
			},
		);

		// 添加响应拦截器
		this.$http.interceptors.response.use(
			function (response) {
				// 对响应数据做点什么
				return response.data;
			},
			function (error) {
				// 对响应错误做点什么
				return { success: false, message: '系统内部错误' };
			},
		);
	}
	get(url, data = {}) {
		const { token } = this.cancel({
			method: 'get',
			url,
			data,
		});
		return this.$http
			.get(url, {
				data,
				cancelToken: token,
			})
			.catch((thrown) => {
				if (axios.isCancel(thrown)) {
					console.log('Request canceled', thrown.message);
				}
			});
	}

	post(url, data = {}) {
		const { token } = this.cancel({
			method: 'post',
			url,
			data,
		});
		return this.$http.post(url, data, {
			...this.dataMethodDefaults,
			cancelToken: token,
		});
	}

	put(url, data = undefined) {
		return this.$http.put(url, data, { ...this.dataMethodDefaults });
	}

	delete(url, data = {}) {
		return this.$http.delete(url, { data });
	}
}

export default BaseRequest;
