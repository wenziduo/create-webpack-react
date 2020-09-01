// import { useDispatch } from 'react-redux';
export const asyncDispatch = (dispatch, namespace) => (params) =>
	new Promise((resolve, reject) => {
		dispatch({
			type: `${namespace}/${params.type}`,
			payload: params.payload || {},
			resolve,
		});
	});
