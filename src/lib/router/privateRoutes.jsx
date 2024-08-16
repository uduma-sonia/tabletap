import { RoutePaths } from "./routePaths";
import { Dashboard, AllTrips, TripDetails } from "../../pages";

export const privateRoutes = [
  {
    route: RoutePaths.DASHBOARD,
    page: <Dashboard />,
  },
  {
    route: RoutePaths.ALL_TRIPS,
    page: <AllTrips />,
  },
  {
    route: RoutePaths.TRIP_DETAILS,
    page: <TripDetails />,
  },
];
