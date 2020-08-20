import React from "react";
import Header from "../components/Header";

const PlatformManagementComponent = ({ children }) => {
  return (
    <div>
      <Header />
      <div>这是平台管理</div>
      <div>{children}</div>
    </div>
  );
};

export default PlatformManagementComponent;
