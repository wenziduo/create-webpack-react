import React from 'react';
import { currentRouterProps } from './router.d';
import { asyncLoad } from './asyncLoad';

const routers: currentRouterProps[] = [
	{
		title: '首页',
		path: '/home',
		key: '/home',
		component: () =>
			asyncLoad({
				currentPagePath: '/home',
				currentModelPath: '/home/model',
			}),
	},
];

export default routers;
