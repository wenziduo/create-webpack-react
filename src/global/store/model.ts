import RootModal from '@/utils/rootModel';
import globalService from './service';

const model = {
  namespace: 'globalModel',
  state: {
    userInfo: {},
  },
  effects: {
    *getUserInfo({ payload }, { call, put }) {
      console.log('success', 'color: green;')
      const res = yield call(globalService.getUserInfo, payload);
      if (res.success) {
        yield put({
          type: 'globalModel/changeUserInfo',
          payload: {
            ...res.data,
          },
        });
      }
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

export const { rootSaga, rootReducer } = new RootModal(model);
