import React, { useEffect, useState } from 'react';
import { Input, Row, Col, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { asyncDispatch } from '@/utils/index';
const SearchComponent = () => {
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const { myCustomer } = useSelector((state) => state.platformCustomer);
	
	const [a, changeAd] = useState('aaa');
	useEffect(() => {
		getlist();
		console.log(a);
	}, [a]);
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
	const formChange = (keyName, value) => {
		dispatch({
			type: 'platformCustomer/changeMyCustomerForm',
			payload: {
				[keyName]: value,
			},
		});
	};
	const handleSearch = () => {
		getlist();
	};
	const {
		form: { hospName },
	} = myCustomer;
	return (
		<Form
			name="normal_login"
			className="login-form"
			initialValues={{ hospName: null }}
			onFinish={handleSearch}
			form={form}
		>
			<Row gutter={24} justify="end">
				<Col span={6}>
					<Form.Item name="username">
						<Input.Search enterButton onSearch={handleSearch} />
					</Form.Item>
				</Col>
			</Row>
		</Form>
	);
};

export default SearchComponent;
