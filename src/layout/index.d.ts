import { currentRouterProps } from '@/rootRouter/router.d';

export interface InitLayoutProps {
	children: React.ComponentElement;
	location: any;
	history: any;
}

export interface InitContentProps {
	children: React.ComponentElement;
	routers: currentRouterProps[];
	currrentModule: 'workspace' | 'platform';
}

export interface InitSiderProps {
	routers: currentRouterProps[];
}
