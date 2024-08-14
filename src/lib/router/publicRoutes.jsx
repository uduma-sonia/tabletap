import { RoutePaths } from "./routePaths";
import { Home, Login, Signup, ForgotPassword, Dashboard } from "../../pages";

export const publicRoutes = [
  {
    route: RoutePaths.BASE_URL,
    page: <Home />,
  },
  {
    route: RoutePaths.LOGIN,
    page: <Login />,
  },
  {
    route: RoutePaths.SIGNUP,
    page: <Signup />,
  },
  {
    route: RoutePaths.FORGOT_PASSWORD,
    page: <ForgotPassword />,
  },
  {
    route: RoutePaths.DASHBOARD,
    page: <Dashboard />,
  },
];
