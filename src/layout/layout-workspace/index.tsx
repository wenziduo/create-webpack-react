import React from 'react';
import Layout from '@/antdComponent/layout';
import workspaceRouters, { currrentModule } from '@/rootRouter/router-workspace';
import SiderComponent from '../components/Sider';
import ContentComponent from '../components/Content';

const PlatformManagementComponent = ({ children }) => {
	return (
		<Layout>
			<SiderComponent routers={workspaceRouters} currrentModule={currrentModule} />
			<ContentComponent children={children} routers={workspaceRouters} currrentModule={currrentModule} />
		</Layout>
	);
};

export default PlatformManagementComponent;
