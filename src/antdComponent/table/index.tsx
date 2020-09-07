import React from 'react';
import { Table } from 'antd';
import { InitProps } from './index.d';

const AntdTable = (props: InitProps) => {
	return <Table {...props}>{props.children}</Table>;
};

export default AntdTable;
