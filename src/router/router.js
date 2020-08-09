import React from "react";
import HomeComponent from "../pages/home";
import ListComponent from "../pages/list";
import AboutComponent from "../pages/about";
export const routerData = [
  {
    title: "首页",
    path: "/home",
    key: "/home",
    component: () => <HomeComponent />,
  },
  {
    title: "列表",
    path: "/list",
    key: "/list",
    component: () => <ListComponent />,
  },
  {
    title: "关于",
    path: "/about",
    key: "/about",
    component: () => <AboutComponent />,
  },
];
