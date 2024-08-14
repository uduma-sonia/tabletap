// import { BrowserRouter, Route, Routes } from "react-router-dom";
// // import Home from "../../pages/Home";

// export default function Routers() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route key={"/"} path={"/"} element={<Home />} /> */}

//         {/* TODO: 404 PAGE */}
//         {/* <Route path="*" element={<Home />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";
// import RouteGuard from "./routeGuard";
// import { privateRoutes } from "./privateRoutes";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map(({ route, page }) => {
          return <Route key={route} path={route} element={page} />;
        })}

        {/* <Route element={<RouteGuard />}>
          {privateRoutes.map(({ route, page }) => {
            return <Route key={route} path={route} element={page} />;
          })}
        </Route> */}

        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
