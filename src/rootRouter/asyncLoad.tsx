import React from 'react';
import Loadable from 'react-loadable';
import { Spin } from '@/antdComponent';
import { DynamicModuleLoader } from 'redux-dynamic-modules';

const MyConpponent = ({ error }) => {
	return error ? <center style={{ color: 'orangered' }}>组件加载失败！</center> : <Spin spinning={true} />;
};
interface InProps {
	currentPagePath: string;
	currentModelPath: string;
}
export const asyncLoad = ({ currentPagePath, currentModelPath }: InProps) => {
	const { namespace, rootSaga, rootReducer } = require(`@/pages${currentModelPath}`);
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
	const CurrentLoadable = Loadable({
		loader: () => {
			return import(`@/pages${currentPagePath}`);
		},
		loading: MyConpponent,
	});
	return (
		<DynamicModuleLoader modules={[CurrentModules]}>
			<CurrentLoadable />
		</DynamicModuleLoader>
	);
};
