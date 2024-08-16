import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";
// import RouteGuard from "./routeGuard";
import { privateRoutes } from "./privateRoutes";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map(({ route, page }) => {
          return <Route key={route} path={route} element={page} />;
        })}

        {/* <Route element={<RouteGuard />}> */}
        {privateRoutes.map(({ route, page }) => {
          return <Route key={route} path={route} element={page} />;
        })}
        {/* </Route> */}

        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
