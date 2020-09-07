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
			<Layout>{children && children}</Layout>
		</Layout>
	);
}

const RootLayout: React.ComponentElement = (props) => {
	const globalState = useSelector((state) => state.globalModel);
	const dispatch = useDispatch();
	console.log('props', props);
	const { location, history } = props;
	console.log('location', location);
	console.log('history', history);
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
		console.log('res', res);
		if (res.success) {
			// 跳转至首页
			if (location.pathname === '/') {
				history.replace('/home');
			}
		}
	};
	const { logged } = globalState;
	console.log('logged', logged);
	return logged ? <LayoutComponent {...props} /> : <Spin spinning={true} />;
};

export default RootLayout;
