import React from 'react';
import ReduxComponent from '@/rootRedux/store';

const ReduxContainer: React.ReactNode = ({ children }: { children: React.ReactNode }) => {
	return <ReduxComponent>{children}</ReduxComponent>;
};

export default ReduxContainer;
