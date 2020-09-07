import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Header } from '@/antdComponent/layout';
import Menu, { MenuItem } from '@/antdComponent/menu';
import imgLogo from '@/assets/images/logo.svg';
import './Header.less';

const HeaderComponent = () => {
	const location = useLocation();
	const history = useHistory();
	const handleMenuChange = (activeKey) => {
		if (activeKey === 'home') {
			history.push('/home/home');
		}
		if (activeKey === 'workspace') {
			history.push('/workspace/auditManagement/submit');
		}
		if (activeKey === 'platform') {
			history.push('/platform/customer');
		}
	};
	const defaultRouter =
		location.pathname.indexOf('/home') === 0
			? ['home']
			: location.pathname.indexOf('/workspace') === 0
			? ['workspace']
			: location.pathname.indexOf('/platform') === 0
			? ['platform']
			: null;
	return (
		<Header className="layout-common-header">
			<div className="header-left-container">
				<div className="header-logo">
					<img src={imgLogo} />
					<span>微萌医院商城</span>
				</div>
			</div>
			<div className="header-modules-container">
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={defaultRouter} className="modules-container">
					<MenuItem key="home" onClick={handleMenuChange.bind(this, 'home')}>
						首页
					</MenuItem>
					<MenuItem key="workspace" onClick={handleMenuChange.bind(this, 'workspace')}>
						工作空间
					</MenuItem>
					<MenuItem key="platform" onClick={handleMenuChange.bind(this, 'platform')}>
						平台管理
					</MenuItem>
				</Menu>
			</div>
			<div className="header-right-container">
				{/* <Menu>
					<MenuItem disabled>{currentUser.nick}</MenuItem>
					<MenuItem>
						<Link
							to="/my/personal-center"
							className={noticeButtonClass}
							replace={props.location.pathname === '/my/personal-center'}
							onClick={handleOpenTab.bind(this, personalCenterItem[0])}
						>
							个人中心
						</Link>
					</MenuItem>
					<Menu.Divider />
					<MenuItem key="logout">退出登录</MenuItem>
				</Menu> */}
			</div>
		</Header>
	);
};

export default HeaderComponent;
