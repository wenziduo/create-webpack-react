import React from "react";
import HomePage from "@/pages/home";
import { currentRouterProps } from './router.d'
const routers: currentRouterProps[] = [
  {
    title: "首页",
    path: "/home",
    key: "/home",
    component: () => <HomePage />,
  },
];
export default routers;
