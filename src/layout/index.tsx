import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Spin, Button, Layout } from '@/antdComponent';
import globalService from '@/model/service';
import Header from './components/Header';
import './index.less';

export default function LayoutComponent({ children }: { children: any }) {
	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();
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
		console.log('location', location);
		if (res.success) {
			// 跳转至首页
			if (location.pathname === '/') {
				history.replace('/home');
			}
		}
	};
	return (
		<Layout>
			<Header />
		</Layout>
	);
}
