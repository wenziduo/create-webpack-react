import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Button } from '@/antdComponent';
import globalService from '@/model/service';
import './index.less';

export default function LayoutComponent({ children }: { children: any }) {
	const dispatch = useDispatch();
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
	};
	return (
		<div className="root-loading">
			<Spin spinning={true} size="large" />
		</div>
	);
}
