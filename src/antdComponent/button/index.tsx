import React from 'react';
import { Button } from 'antd';
import { InitProps } from './index.d';

const AntdButton = (props: InitProps) => {
	return <Button {...props}>{props.children}</Button>;
};

export default AntdButton;
