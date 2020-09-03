import BaseRequest from '@/utils/request';

class Service extends BaseRequest {
	constructor() {
		super();
	}
	getUserInfo = (params: any) => {
		return this.get('/initWebApp/getInfo', params);
	};
}

export default new Service();
