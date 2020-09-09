import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form, { FormItem } from '@/antdComponent/form';
import Button from '@/antdComponent/button';
import Grid from '@/antdComponent/grid';
import Divider from '@/antdComponent/divider';
import { InputSearch } from '@/antdComponent/Input';
const { Row, Col } = Grid;

const SearchComponent = ({ children, initialValues = {}, onSubmit, namespace, searchKeyArr, stateKey }) => {
	const currModel = useSelector((state) => state[namespace]);
	// const currState = currModel[stateKey];
	// const currState = searchKeyArr.reduce((total, curr, index, arr) => {
	// 	if (index === 0) {
	// 		total = currModel[curr];
	// 	} else {
	// 		total = total[curr];
	// 	}
	// 	return total;
	// }, {});
	const dispatch = useDispatch();
	const [form] = Form.useForm();
	const setCurrentModel = (key, value) => {
		const cloneCurrModel = { ...currModel };
		let demo = cloneCurrModel;
		searchKeyArr.forEach((ele, index, arr) => {
			if (arr.length === index + 1) {
				demo[ele][key] = value;
			} else {
				demo = demo[ele];
			}
		});
		dispatch({
			type: `${namespace}/changeModel`,
			payload: {
				...currModel,
			},
		});
	};
	const onSearch = () => {
		const values = form.getFieldsValue();
		console.log(stateKey, values);
		setCurrentModel(stateKey, values);
		onSubmit();
	};
	const handleOpenMore = () => {};
	const childrenEle = children({ onSearch });
	const layout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 16 },
	};
	const onResetValue = () => {
		setCurrentModel(stateKey, initialValues);
	};
	return (
		<Form name="normal_login" onFinish={onSearch} form={form} {...layout} initialValues={initialValues}>
			<div style={{ display: 'flex' }}>
				<Row gutter={24} justify="start" alignItem="center" style={{ flex: 1 }}>
					{childrenEle.map((ele) => (
						<Col span={ele.span} key={ele.dataIndex}>
							<Form.Item name={ele.dataIndex} label={ele.label} initValue={ele.initValue}>
								{ele.ele}
							</Form.Item>
						</Col>
					))}
				</Row>
				<div style={{ flexBasis: 150, flexGrow: 0, flexShrink: 0 }}>
					<div>
						<Button type="primary" onClick={onSearch}>
							搜索
						</Button>
						<Divider type="vertical" />
						<Button onClick={onResetValue}>重置</Button>
					</div>
					<div>
						<span>
							<a onClick={handleOpenMore} style={{ marginTop: 10, width: 90, display: 'block', fontSize: 12 }}>
								{/* {currState.openKey ? '简易' : '高级'} */}
								搜索
							</a>
						</span>
					</div>
				</div>
			</div>
		</Form>
	);
};

export default SearchComponent;
