import React from 'react';
import { currentRouterProps } from './router';
import { asyncLoad } from './asyncLoad';
const routers: currentRouterProps[] = [
	{
		title: '审核管理',
		path: '/auditManagement',
		key: '/auditManagement',
		children: [
			{
				title: '提交审核',
				path: '/submit',
				key: '/submit',
				breadcrumb: [{ title: '工作空间' }, { title: '审核管理' }, { title: '提交审核' }],
				component: () =>
					asyncLoad({
						currentPagePath: '/workspace-auditManagement-submit',
						currentModelPath: '/workspace-auditManagement-submit/model',
					}),
			},
		],
	},
];
export const currrentModule = 'workspace';
export default routers;
