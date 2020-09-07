import BaseRequest from '@/utils/request';

class Service extends BaseRequest {
	constructor() {
		super();
	}
	// 获取客户列表数据
	getCustomerList = (params: any) => {
		return this.get('/customer/list', params);
	};
	// 获取历史记录列表数据
	getApplyHistoryList = (params: any) => {
		return this.get('/customer/list', params);
	};
}

export default new Service();
