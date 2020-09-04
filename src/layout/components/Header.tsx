tianimport React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/antdComponent/layout';
import Menu, { MenuItem } from '@/antdComponent/menu';
import imgLogo from '@/assets/images/logo.svg';
import './Header.less';

const HeaderComponent = () => {
	const onMenuClick = () => {};
	return (
		<Header className="layout-common-header">
			<div className="header-left-container">
				<div className="header-logo">
					<img src={imgLogo} />
					<span>微萌医院商城</span>
				</div>
			</div>
			<div className="header-modules-container">
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} className="modules-container">
					<MenuItem key="1">首页</MenuItem>
					<MenuItem key="2">工作空间</MenuItem>
					<MenuItem key="3">平台管理</MenuItem>
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
