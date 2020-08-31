import React from 'react';
import RouterContainer from './RouterContainer';
import ReduxContainer from './ReduxContainer';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

const AntdContainer = () => {
	return (
		<ConfigProvider locale={zhCN}>
			<ReduxContainer>
				<RouterContainer />
			</ReduxContainer>
		</ConfigProvider>
	);
};

export default AntdContainer;
