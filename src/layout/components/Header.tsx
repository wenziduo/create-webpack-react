import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      <Link to="/home">前往home</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/workspace">前往工作空间</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/platformManagement">前往平台管理</Link>&nbsp;&nbsp;&nbsp;

      <Link to="/workspace/about">前往工作空间 - 关于</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/platformManagement/list">前往平台管理 - 列表</Link>
    </div>
  );
};

export default HeaderComponent;
