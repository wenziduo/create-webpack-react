import axios, { AxiosStatic, AxiosRequestConfig, AxiosInstance } from "axios";
import qs from "qs";

interface BaseRequestProps {
  get: (url: string, config: AxiosRequestConfig) => Promise<any>;
  post: (url: string, data: any, config: AxiosRequestConfig) => void;
  put: (url: string, data: any, config: AxiosRequestConfig) => void;
  delete: (url: string, config: AxiosRequestConfig) => void;
}

class BaseRequest implements BaseRequestProps {
  private $http: AxiosStatic;
  private dataMethodDefaults: AxiosRequestConfig;
  constructor() {
    this.$http = axios;
    this.$http.create({
      // baseURL: "/api/b2b",
    });
    this.dataMethodDefaults = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      transformRequest: [
        function (data) {
          return qs.stringify(data);
        },
      ],
    };
  }

  get(url, data = {}) {
    return this.$http.get(url, { data });
  }

  post(url, data = undefined) {
    return this.$http.post(url, data, {
      ...this.dataMethodDefaults,
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
