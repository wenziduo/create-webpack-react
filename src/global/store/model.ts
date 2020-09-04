import RootModal from '@/utils/rootModel';
import globalService from './service';
import { GlobalModelProps } from './model.d';
const model = {
	namespace: 'globalModel',
	state: {
		userInfo: {},
	} as GlobalModelProps,
	effects: {
		*getUserInfo({ call, put }, { payload, resolve }) {
			console.log('%csuccess', 'color: green;');
			const res = yield call(globalService.getUserInfo, payload);
			if (res.success) {
				yield put({
					type: 'globalModel/changeUserInfo',
					payload: {
						...res.data,
					},
				});
			}
			resolve(res);
		},
	},
	reducers: {
		changeUserInfo(state, { payload }) {
			return {
				...state,
				userInfo: {
					...state.userInfo,
					...payload,
				},
			};
		},
	},
};
// const modelData = new RootModal(model);
// console.log('modelData', modelData);
export const { namespace, rootSaga, rootReducer } = new RootModal(model);
