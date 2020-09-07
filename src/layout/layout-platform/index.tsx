import React from 'react';
import Layout from '@/antdComponent/layout';
import platformRouters, { currrentModule } from '@/rootRouter/router-platform';
import SiderComponent from '../components/Sider';
import ContentComponent from '../components/Content';

const PlatformManagementComponent = ({ children }) => {
	return (
		<Layout>
			<SiderComponent routers={platformRouters} currrentModule={currrentModule} />
			<ContentComponent children={children} routers={platformRouters} currrentModule={currrentModule} />
		</Layout>
	);
};

export default PlatformManagementComponent;
