import React, { useEffect, useState } from 'react';
import Search from '@/businessComponent/search';
import Input, { InputSearch } from '@/antdComponent/Input';
import { useDispatch, useSelector } from 'react-redux';
import { asyncDispatch } from '@/utils/index';
import { initValues } from '../model'
const SearchComponent = () => {
	// const [form] = Form.useForm();
	const dispatch = useDispatch();
	// const { myCustomer } = useSelector((state) => state.platformCustomer);

	// const [a, changeAd] = useState('aaa');
	useEffect(() => {
		getlist();
	}, []);
	const getlist = async () => {
		const res: any = await asyncDispatch(
			dispatch,
			'platformCustomer',
		)({
			type: 'getCustormerList',
			payload: {},
		});
		console.log('res', res);
	};
	// const formChange = (keyName, value) => {
	// 	dispatch({
	// 		type: 'platformCustomer/changeMyCustomerForm',
	// 		payload: {
	// 			[keyName]: value,
	// 		},
	// 	});
	// };
	const handleSearch = () => {
		getlist();
	};
	// const {
	// 	form: { hospName },
	// } = myCustomer;
	return (
		<Search
			onSubmit={handleSearch}
			namespace="platformCustomer"
			searchKeyArr={['myCustomer', 'searchState']}
			stateKey="values"
			initialValues={initValues}
		>
			{({ onSearch }) => [{ label: '客户姓名', dataIndex: 'username', span: 6, initValue: null, ele: <Input /> }]}
		</Search>
	);
};

export default SearchComponent;
