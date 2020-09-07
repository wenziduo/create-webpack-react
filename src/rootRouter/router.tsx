import React from 'react';
import LayoutHome from '@/layout/layout-home';
import LayoutWorkspace from '@/layout/layout-workspace';
import LayoutPlatformManagement from '@/layout/layout-platform';
import routerHome from './router-home';
import routerWorkspace from './router-workspace';
import routerPlatformManagement from './router-platform';
import { RouterDataProps } from './router';

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
		path: '/platform',
		component: LayoutPlatformManagement,
		routers: routerPlatformManagement,
	},
};
