import React from "react";
import RouterContainer from './RouterContainer'
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

const AntdContainer = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="App"><RouterContainer /></div>
    </ConfigProvider>
  );
};

export default AntdContainer;
