import React from 'react';
import Table from '@/antdComponent/table';
import { useDispatch, useSelector } from 'react-redux';
const columns = [
	{
		dataIndex: 'hospDistrictName',
		title: '医院',
	},
	{
		dataIndex: 'nick',
		title: '联系人',
	},
	{
		dataIndex: 'phone',
		title: '联系电话',
	},
	{
		dataIndex: 'gmtCreate',
		title: '关系建立日期',
	},
];
const TableComponent = () => {
	const { myCustomer, applyHistory, tabsKey } = useSelector((state) => state.platformCustomer);
	const current = tabsKey === 'myCustomer' ? myCustomer : tabsKey === 'myCustomer' ? applyHistory : {};
	return (
		<Table
			dataSource={current.data}
			columns={columns}
			loading={current.tableLoading}
			rowKey="_id"
			size="small"
			pagination={{
				current: current.currentPage,
				pageSize: current.pageSize,
				showQuickJumper: true,
				showSizeChanger: true,
				pageSizeOptions: ['10', '20', '50', '100'],
				total: current.total,
				// onChange: handleChangePage,
				// onShowSizeChange: handleChangePageSize,
				showTotal: (totalNum, range) => `显示 ${range[0]} 到 ${range[1]},共有 ${totalNum} 条记录`,
			}}
		/>
	);
};

export default TableComponent;
