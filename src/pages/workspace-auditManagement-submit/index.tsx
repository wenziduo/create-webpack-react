import React, { useEffect } from 'react';
import Wenziduo666 from 'wenziduo666';
import { useDispatch } from 'react-redux';
import { asyncDispatch } from '@/utils';

export default function HomePage() {
	const dispatch = useDispatch();
	useEffect(() => {
		getUserInfo();
	}, []);
	const getUserInfo = async () => {
		const res: any = await asyncDispatch(
			dispatch,
			'page_home_index_modelodel',
		)({
			type: 'getUserInfo',
			payload: {},
		});
		console.log('res', res);
	};
	return (
		<div>
			<span>工作空间 你好啊</span>
			<div><Wenziduo666 textName="你好啊" /></div>
		</div>
	);
}
