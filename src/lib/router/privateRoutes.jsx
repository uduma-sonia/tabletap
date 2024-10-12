import { RoutePaths } from "./routePaths";
import {
  Dashboard,
  Menu,
  MenuCategory,
  Orders,
  Settings,
  QRCodes,
  Employees,
} from "../../pages";

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
  {
    route: RoutePaths.SETTINGS_ACCOUNT,
    page: <Settings />,
  },
  {
    route: RoutePaths.QR_CODE,
    page: <QRCodes />,
  },
  {
    route: RoutePaths.EMPLOYEES,
    page: <Employees />,
  },
];
