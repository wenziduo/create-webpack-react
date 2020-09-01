import React from 'react';
// import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createStore, IModuleStore } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';
import { Provider } from 'react-redux';
import { namespace, rootSaga, rootReducer } from '@/global/store/model';
// import createSagaMiddleware from 'redux-saga';
// import rootReducer from './rootReducer';
// import rootSaga from './rootSaga';

// const rootReducers = combineReducers(rootReducer);
// const sagaMiddleware = createSagaMiddleware();
// const rootMiddleware = applyMiddleware(sagaMiddleware);
// const store = createStore(rootReducers, rootMiddleware);
const store = createStore(
	{ extensions: [getSagaExtension()] },
	{
		id: namespace,
		reducerMap: {
			[namespace]: rootReducer,
		},
		sagas: [rootSaga()],
		// Actions to fire when this module is added/removed
		// initialActions: [],
		// finalActions: [],
	},
);
// sagaMiddleware.run(rootSaga);

const ReduxComponent = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default ReduxComponent;
