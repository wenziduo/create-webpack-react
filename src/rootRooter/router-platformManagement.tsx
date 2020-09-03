import React from 'react';
import ListPage from '@/pages/list';
import { currentRouterProps } from './router.d';
import { asyncLoad } from './asyncLoad';
const routers: currentRouterProps[] = [
	{
		title: '列表',
		path: '/list',
		key: '/list',
		component: () =>
			asyncLoad({
				currentPagePath: '/list',
				currentModelPath: '/list/model',
			}),
	},
];
export default routers;
