import React from "react";
import HomeComponent from "../pages/home";
export const routerData = [
  {
    title: "首页",
    path: "/home",
    key: "/home",
    component: () => <HomeComponent />,
  },
];
