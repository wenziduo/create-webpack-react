// 全局路由对象
export interface RouterDataProps {
	home: {
		path: string;
		component: () => React.ReactElement;
		routers: currentRouterProps[];
	};
	workspace: {
		path: string;
		component: () => React.ReactElement;
		routers: currentRouterProps[];
	};
	platformManagement: {
		path: string;
		component: () => React.ReactElement;
		routers: currentRouterProps[];
	};
}
// 当前路由对象明细字段
export type currentRouterProps = {
	title: string;
	path: string;
	key: string;
	component: () => React.ReactElement;
};
