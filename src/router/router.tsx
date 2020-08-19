import routerHome from "./router-home";
import routerWorkspace from "./router-workspace";
import routerPlatformManagement from "./router-platformManagement";

export const routerData = {
  home: {
    path: "/home",
    routers: routerHome,
  },
  workspace: {
    path: "/workspace",
    routers: routerWorkspace,
  },
  platformManagement: {
    path: "/platformManagement",
    routers: routerPlatformManagement,
  },
};
