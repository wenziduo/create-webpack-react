import React from 'react';
import { currentRouterProps } from './router';
import { asyncLoad } from './asyncLoad';
const routers: currentRouterProps[] = [
	{
		title: '客户管理',
		path: '/customer',
		key: '/customer',
		breadcrumb: [{ title: '平台管理' }, { title: '客户管理' }],
		component: () =>
			asyncLoad({
				currentPagePath: '/platform-customer',
				currentModelPath: '/platform-customer/model',
			}),
	},
];
export const currrentModule = 'platform';
export default routers;
