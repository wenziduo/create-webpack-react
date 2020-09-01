import React from 'react';
import HomePage from '@/pages/home';
import { currentRouterProps } from './router.d';
import Loadable from 'react-loadable';
import { Spin } from '@/antdComponent';
import { DynamicModuleLoader } from 'redux-dynamic-modules';

const asyncLoad = ({ currentPagePath, currentModelPath }) => {
	const CurrentComponent = require(`@/pages${currentPagePath}`).default;
	const { namespace, rootSaga, rootReducer } = require(`../pages${currentModelPath}`);
	const generatorRootSaga = rootSaga();
	const CurrentModules = [
		{
			id: namespace,
			reducerMap: {
				[namespace]: rootReducer,
			} as any,
			// initialActions: [],
			sagas: [generatorRootSaga],
		},
	];
	console.log('%c CurrentModules', 'color: green', CurrentModules);
	console.log('%c CurrentComponent', 'color: green', CurrentComponent);
	// class CurrentComponentClass extends React.Component {
	// 	render() {
	// 		return (
	// 			<DynamicModuleLoader modules={[CurrentModules]}>
	// 				<CurrentComponent />
	// 			</DynamicModuleLoader>
	// 		);
	// 	}
	// }
	// const DynamicModuleComponent = (
	// 	<DynamicModuleLoader modules={[CurrentModules]}>
	// 		<HomePage />
	// 	</DynamicModuleLoader>
	// );
	// return Loadable({
	// 	// loader: import(`@/pages${currentPagePath}`),
	// 	// model: currentModelPath ? import(`@/pages${currentModelPath}`) : null,
	// 	loader: import(`@/pages/${currentPagePath}`),
	// 	loading: <Spin spinning={true} />,
	// 	delay: 100,
	// });
	// const Compon = import(`../pages/${currentPagePath}`);
	return (
		<DynamicModuleLoader modules={[CurrentModules]}>
			<CurrentComponent />
		</DynamicModuleLoader>
	);
};

const routers: currentRouterProps[] = [
	{
		title: '首页',
		path: '/home',
		key: '/home',
		component: () => {
			return asyncLoad({
				currentPagePath: '/home',
				currentModelPath: '/home/model',
			});
			// const HomeP =  require('../pages/home')
			// console.log('HomeP', HomeP)
			// return <HomeP.default />
		},
	},
];
export default routers;
