import React from 'react';
import { Menu } from 'antd';
import { InitProps } from './index.d';

// const AntdMenu = (props: InitProps) => {
// 	return <Menu {...props}>{props.children}</Menu>;
// };
export const MenuItem = Menu.Item;
export const SubMenu = Menu.SubMenu;
export default Menu;
