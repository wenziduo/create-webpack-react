import React from 'react';
import AboutPage from '@/pages/about';
import { currentRouterProps } from './router.d';
import { asyncLoad } from './asyncLoad';
const routers: currentRouterProps[] = [
	{
		title: '关于',
		path: '/about',
		key: '/about',
		component: () =>
			asyncLoad({
				currentPagePath: '/home',
				currentModelPath: '/home/model',
			}),
	},
];
export default routers;
