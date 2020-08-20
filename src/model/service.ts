import BaseRequest from "@/utils/request";

class GlobalService extends BaseRequest {
  constructor() {
    super();
  }
  getUserInfo(params?) {
    return this.get("/api/b2b/initWebApp/getInfo", params);
  }
}

export default new GlobalService();
