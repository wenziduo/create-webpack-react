import React from 'react';
import { Layout } from 'antd';
import { InitProps } from './index.d';

const AntdLayout = (props: InitProps) => {
	return <Layout {...props}></Layout>;
};

export default AntdLayout;
