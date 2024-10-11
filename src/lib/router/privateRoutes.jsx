import { RoutePaths } from "./routePaths";
import { Dashboard, Menu, MenuCategory, Orders } from "../../pages";

export const privateRoutes = [
  {
    route: RoutePaths.DASHBOARD,
    page: <Dashboard />,
  },
  {
    route: RoutePaths.MENU,
    page: <Menu />,
  },
  {
    route: RoutePaths.MENU_CATEGORY,
    page: <MenuCategory />,
  },
  {
    route: RoutePaths.ORDERS,
    page: <Orders />,
  },
];
