import React from 'react';
import ListPage from '@/pages/list';
import { currentRouterProps } from './router.d';
const routers: currentRouterProps[] = [
  {
    title: '列表',
    path: '/list',
    key: '/list',
    component: () => <ListPage />,
  },
];
export default routers;
