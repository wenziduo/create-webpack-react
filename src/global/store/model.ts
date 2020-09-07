import RootModal from '@/utils/rootModel';
import globalService from './service';
import { GlobalModelProps } from './model.d';
const model = {
	namespace: 'globalModel',
	state: {
		logged: false,
		userInfo: {},
	} as GlobalModelProps,
	effects: {
		*getUserInfo({ call, put }, { payload, resolve }) {
			const res = yield call(globalService.getUserInfo, payload);
			if (res.success) {
				yield put({
					type: 'globalModel/changeUserInfo',
					payload: {
						...res.data,
					},
				});
				yield put({
					type: 'globalModel/changeLogged',
					payload: true,
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
		changeLogged(state, { payload }) {
			return {
				...state,
				logged: payload,
			};
		},
	},
};

export const { namespace, rootSaga, rootReducer } = new RootModal(model);
