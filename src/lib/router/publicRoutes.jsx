import { RoutePaths } from "./routePaths";
import { Home, Login } from "../../pages";

export const publicRoutes = [
  {
    route: RoutePaths.BASE_URL,
    page: <Home />,
  },
  {
    route: RoutePaths.LOGIN,
    page: <Login />,
  },
];
