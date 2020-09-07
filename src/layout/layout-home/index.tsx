import React from 'react';
import Header from '../components/Header';

const HomeComponent = ({ children }) => {
	return (
		<div>
			<div>这是首页</div>
			<div>{children}</div>
		</div>
	);
};

export default HomeComponent;
