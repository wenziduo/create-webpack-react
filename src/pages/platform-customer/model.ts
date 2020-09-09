import RootModal from '@/utils/rootModel';
import globalService from './service';
export const initValues = {};
const model = {
	namespace: 'platformCustomer',
	state: {
		myCustomer: {
			searchState: {
				keyOpen: false,
				values: initValues,
			},
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
		*getCustormerList({ call, put, select }, { payload, resolve }) {
			const {
				myCustomer: { form, currentPage, pageSize },
			} = yield select((state) => state.platformCustomer);
			const params = {
				...payload,
				...form,
				currentPage,
				pageSize,
			};
			yield put({
				type: 'platformCustomer/changeMyCustomer',
				payload: { tableLoading: true },
			});
			const res = yield call(globalService.getCustomerList, params);
			yield put({
				type: 'platformCustomer/changeMyCustomer',
				payload: { tableLoading: false },
			});
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
		*getApplyHistoryList({ call, put, select }, { payload, resolve }) {
			const {
				applyHistory: { form, currentPage, pageSize },
			} = yield select((state) => state.platformCustomer);
			const params = {
				...payload,
				...form,
				currentPage,
				pageSize,
			};
			yield put({
				type: 'platformCustomer/changeApplyHistory',
				payload: { tableLoading: true },
			});
			const res = yield call(globalService.getApplyHistoryList, params);
			yield put({
				type: 'platformCustomer/changeApplyHistory',
				payload: { tableLoading: false },
			});
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
