import React from "react";
import AboutPage from "@/pages/about";
import { currentRouterProps } from "./router.d";
const routers: currentRouterProps[] = [
  {
    title: "关于",
    path: "/about",
    key: "/about",
    component: () => <AboutPage />,
  },
];
export default routers;
