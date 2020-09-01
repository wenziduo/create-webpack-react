import RootModal from '@/utils/rootModel';
import globalService from './service';

const model = {
	namespace: 'page_home_index_modelodel',
	state: {
		userInfo: {},
	},
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

export const { namespace, rootSaga, rootReducer } = new RootModal(model);
