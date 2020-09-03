import React from 'react';
import Loadable from 'react-loadable';
import { Spin } from '@/antdComponent';
import { DynamicModuleLoader } from 'redux-dynamic-modules';

class Loading extends React.Component {
	render() {
		return <Spin spinning={true} />;
	}
}

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
			return import(`@/pages/home${currentPagePath}`);
		},
		loading: Loading,
		delay: 1,
	});
	return (
		<DynamicModuleLoader modules={[CurrentModules]}>
			<CurrentLoadable />
		</DynamicModuleLoader>
	);
};
