import React from 'react';
import { currentRouterProps } from './router';
import { asyncLoad } from './asyncLoad';

const routers: currentRouterProps[] = [
	{
		title: '首页',
		path: '/',
		key: '/',
		component: () =>
			asyncLoad({
				currentPagePath: '/home',
				currentModelPath: '/home/model',
			}),
	},
];

export const currrentModule = 'home';
export default routers;
