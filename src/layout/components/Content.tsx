import React from 'react';
import { Link } from 'react-router-dom';
import { Content } from '@/antdComponent/layout';
import Breadcrumb, { BreadcrumbItem } from '@/antdComponent/breadcrumb';
import { InitContentProps } from '../index.d';

const ContentComponent: void = ({ children, routers, currrentModule }: InitContentProps) => {
	const currRoute = routers
		.reduce((total, curr, arr) => {
			return total.concat(
				curr.children
					? curr.children.map((ele) => ({ ...ele, path: '/' + currrentModule + curr.path + ele.path }))
					: {
							...curr,
							path: '/' + currrentModule + curr.path,
					  },
			);
		}, [])
		.find((ele) => ele.path === location.pathname);
	const { breadcrumb } = currRoute || { breadcrumb: [] };
	return (
		<Content style={{ display: 'flex', flexDirection: 'column' }}>
			<Breadcrumb style={{ padding: '10px 15px' }}>
				{breadcrumb.map((item) => (
					<BreadcrumbItem key={item.title}>
						{item.path ? <Link to={item.path}>{item.title}</Link> : item.title}
					</BreadcrumbItem>
				))}
			</Breadcrumb>
			<Content
				style={{
					display: 'flex',
					flexDirection: 'column',
					overflowY: 'auto',
					overflowX: 'hidden',
					padding: '0 15px',
				}}
			>
				{children}
			</Content>
		</Content>
	);
};

export default ContentComponent;
