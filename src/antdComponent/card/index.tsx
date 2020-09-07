import React from 'react';
import { Card } from 'antd';
import { InitProps, HeaderProps } from './index.d';
import HeaderComponent from './Header';
import './index.less';
export const { Header, Sider, Content } = Card;

const AntdCard = (props: InitProps) => {
	return <Card {...props}>{props.children}</Card>;
};

// export const Header = (props: HeaderProps) => {
// 	return <LayoutHeader {...props}>{props.children}</LayoutHeader>;
// };

export default AntdCard;
