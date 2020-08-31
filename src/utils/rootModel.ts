/**
 * @author caiwenduio
 * @file 全局的saga
 */
import { take, call, put, select, fork, takeEvery, takeLatest } from 'redux-saga/effects';

class InitProps {
	namespace: string;
	state: any;
	effects: any;
	reducers: any;
}
class rootModel extends InitProps {
	state: any;
	rootEffects: any;
	rootReducers: any;
	constructor({ namespace, state, effects, reducers }) {
		super();
		const rootEffects = {};
		const rootReducers = {};
		Object.keys(effects).forEach((ele) => {
			rootEffects[`${namespace}/${ele}`] = effects[ele].bind(this, {
				take,
				call,
				put,
				select,
				fork,
				takeEvery,
				takeLatest,
			});
		});
		Object.keys(reducers).forEach((ele) => {
			// rootReducers[`${namespace}/${ele}`] = function ({ type, payload }) {
			// 	return reducers[ele]({ type, payload }, { call, put, select, fork });
			// };
			rootReducers[`${namespace}/${ele}`] = reducers[ele];
		});
		this.state = state;
		this.rootEffects = rootEffects;
		this.rootReducers = rootReducers;
	}
	rootSaga = () => {
		const that = this;
		return function* () {
			for (let i = 0; i < Object.keys(that.rootEffects).length; i++) {
				yield takeEvery(Object.keys(that.rootEffects)[i], that.rootEffects[Object.keys(that.rootEffects)[i]]);
			}
		};
	};
	rootReducer = (activeState = this.state, { type, payload }) => {
		console.log('%c beginReducer', 'color: orange;');
		// 如果type没匹配上则返回state
		const currentState = this.rootReducers[type]
			? this.rootReducers[type](activeState, { type, payload })
			: activeState;
		return currentState;
	};
}

export default rootModel;
