import React from 'react';
import { Layout } from 'antd';
import { InitProps, HeaderProps } from './index.d';
import HeaderComponent from './Header';
import './index.less';
const { Header: LayoutHeader } = Layout;

const AntdLayout = (props: InitProps) => {
	return <Layout {...props}>{props.children}</Layout>;
};

export const Header = (props: HeaderProps) => {
	return <LayoutHeader {...props}>{props.children}</LayoutHeader>;
};

export default AntdLayout;
