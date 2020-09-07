import RootModal from '@/utils/rootModel';
import globalService from './service';

const model = {
	namespace: 'platformCustomer',
	state: {
		myCustomer: {
			form: {},
			currentPage: 1,
			pageSize: 10,
			total: 0,
			data: [],
			tableLoading: false,
		},
		applyHistory: {
			form: {},
			currentPage: 1,
			pageSize: 10,
			total: 0,
			data: [],
			tableLoading: false,
		},
		tabsKey: 'myCustomer',
	},
	effects: {
		*getCustormerList({ call, put }, { payload, resolve }) {
			const res = yield call(globalService.getCustomerList, payload);
			if (res.success) {
				yield put({
					type: 'platformCustomer/changeMyCustomer',
					payload: {
						data: res.data.data,
						currentPage: res.data.currentPage,
						pageSize: res.data.pageSize,
						total: res.data.total,
					},
				});
			}
			resolve(res);
		},
		*getApplyHistoryList({ call, put }, { payload, resolve }) {
			const res = yield call(globalService.getApplyHistoryList, payload);
			if (res.success) {
				yield put({
					type: 'platformCustomer/changeApplyHistory',
					payload: {
						data: res.data.data,
						currentPage: res.data.currentPage,
						pageSize: res.data.pageSize,
						total: res.data.total,
					},
				});
			}
			resolve(res);
		},
	},
	reducers: {
		changeMyCustomer(state, { payload }) {
			return {
				...state,
				myCustomer: {
					...state.myCustomer,
					...payload,
				},
			};
		},
		changeApplyHistory(state, { payload }) {
			return {
				...state,
				applyHistory: {
					...state.applyHistory,
					...payload,
				},
			};
		},
		changeMyCustomerForm(state, { payload }) {
			return {
				...state,
				myCustomer: {
					...state.myCustomer,
					form: {
						...state.myCustomer.form,
						...payload,
					},
				},
			};
		},
	},
};

export const { namespace, rootSaga, rootReducer } = new RootModal(model);
