import React from 'react';
import { createStore, IModuleStore } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';
import { Provider } from 'react-redux';
import { namespace, rootSaga, rootReducer } from '@/global/store/model';
const store = createStore(
	{ extensions: [getSagaExtension()] },
	{
		id: namespace,
		reducerMap: {
			[namespace]: rootReducer,
		},
		sagas: [rootSaga()], // 默认加载全局的saga
	},
);

const ReduxComponent = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default ReduxComponent;
