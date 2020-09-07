import React from 'react';
import { Sider } from '@/antdComponent/layout';
import Menu, { SubMenu, MenuItem } from '@/antdComponent/menu';
import { useLocation, useHistory } from 'react-router-dom';
import { InitSiderProps } from '../index.d';

const SiderComponent: void = ({ routers, currrentModule }: InitSiderProps) => {
	const location = useLocation();
	const history = useHistory();
	const handleGo = (activePath) => {
		history.push(activePath);
	};
	const defaultSelectedKeys = [location.pathname];
	console.log('defaultSelectedKeys', defaultSelectedKeys);
	return (
		<Sider width={200} className="site-layout-background">
			<Menu
				mode="inline"
				defaultSelectedKeys={defaultSelectedKeys}
				style={{ height: '100%', borderRight: 0 }}
				theme="dark"
			>
				{routers.map((ele) =>
					ele.component ? (
						<MenuItem
							key={'/' + currrentModule + ele.path}
							onClick={handleGo.bind(this, '/' + currrentModule + ele.path)}
						>
							{ele.title}
						</MenuItem>
					) : ele.children ? (
						<SubMenu key={'/' + currrentModule + ele.path} icon={<span>X</span>} title={ele.title}>
							{ele.children.map((item) => (
								<MenuItem
									key={'/' + currrentModule + ele.path + item.path}
									onClick={handleGo.bind(this, '/' + currrentModule + ele.path + item.path)}
								>
									{item.title}
								</MenuItem>
							))}
						</SubMenu>
					) : null,
				)}
			</Menu>
		</Sider>
	);
};

export default SiderComponent;
