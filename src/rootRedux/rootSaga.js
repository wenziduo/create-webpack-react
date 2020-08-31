import { all } from 'redux-saga/effects';
import { rootSaga as globalSaga } from '@/global/store/model';

export default function* rootSaga() {
	// 同时并发多个
	const rootSagas = [globalSaga()()];
	yield all(rootSagas);
}
