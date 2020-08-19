import React from 'react';
import ReduxComponent from '@/rootRedux/store';

const ReduxContainer = ({ children }) => {
  return <ReduxComponent>{children}</ReduxComponent>;
};

export default ReduxContainer;
