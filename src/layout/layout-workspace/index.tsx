import React from "react";
import Header from "../components/Header";

const WorkspaceComponent = ({ children }) => {
  return (
    <div>
      <Header />
      <div>这是工作空间</div>
      <div>{children}</div>
    </div>
  );
};

export default WorkspaceComponent;
