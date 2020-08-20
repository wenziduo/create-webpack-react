import React from "react";
import { Spin } from "antd";
import { InitProps } from "./index.d";

const AntdSpin = (props: InitProps) => {
  return <Spin {...props}>{props.children}</Spin>;
};

export default AntdSpin;
