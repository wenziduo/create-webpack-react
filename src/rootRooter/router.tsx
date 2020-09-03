import React from 'react';
import LayoutHome from '@/layout/layout-home';
import LayoutWorkspace from '@/layout/layout-workspace';
import LayoutPlatformManagement from '@/layout/layout-platformManagement';
import routerHome from './router-home';
import routerWorkspace from './router-workspace';
import routerPlatformManagement from './router-platformManagement';
import { RouterDataProps } from './router.d';

export const routerData: RouterDataProps = {
	home: {
		path: '/home',
		component: LayoutHome,
		routers: routerHome,
	},
	workspace: {
		path: '/workspace',
		component: LayoutWorkspace,
		routers: routerWorkspace,
	},
	platformManagement: {
		path: '/platformManagement',
		component: LayoutPlatformManagement,
		routers: routerPlatformManagement,
	},
};
