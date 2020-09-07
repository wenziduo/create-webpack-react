import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Layout } from '@/antdComponent';
import Header from './components/Header';
import { InitLayoutProps } from './index.d';
import './index.less';

function LayoutComponent({ children }: InitLayoutProps) {
	return (
		<Layout>
			<Header />
			<Layout>{children}</Layout>
		</Layout>
	);
}

const RootLayout: React.ComponentElement = (props) => {
	const globalState = useSelector((state) => state.globalModel);
	const dispatch = useDispatch();
	console.log('location', location);
	const _dispatch = (params) => {
		return new Promise((resolve, reject) => {
			dispatch({
				...params,
				resolve,
			});
		});
	};
	useEffect(() => {
		getUserInfo();
	}, []);
	const getUserInfo = async () => {
		console.log('start res');
		const res: any = await _dispatch({
			type: 'globalModel/getUserInfo',
			payload: {},
		});
		if (res.success) {
			// 跳转至首页
			if (location.pathname === '/') {
				history.replace('/home');
			}
		}
	};
	const { logged } = globalState;
	return logged ? <LayoutComponent {...props} /> : <Spin spinning={true} />;
};

export default RootLayout;
