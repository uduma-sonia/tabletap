import { Box, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { RoutePaths } from "../../lib/router/routePaths";
import { HiHome } from "react-icons/hi2";
import { IoSettingsSharp } from "react-icons/io5";

const defaultRoutes = [
  {
    label: "Dashboard",
    icon: <HiHome />,
    route: RoutePaths.DASHBOARD,
    keyword: "dashboard",
  },
  {
    label: "My Trips",
    icon: <MdSpaceDashboard size="1rem" />,
    route: RoutePaths.ALL_TRIPS,
    keyword: "trip",
  },
  {
    label: "Settings",
    icon: <IoSettingsSharp size="1rem" />,
    route: RoutePaths.BASE_URL,
  },
];

export default function Sidebar() {
  const router = useLocation();

  return (
    <Box>
      <Box
        height="100px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Link to="/dashboard">
          <Text fontWeight="800" fontSize="lg">
            TapHouse
          </Text>
        </Link>
      </Box>

      <Box mt="20px" display="flex" flexDir="column" gap="20px" px="10px">
        {defaultRoutes?.map(({ label, route, icon, keyword }) => {
          // const isActive = router.pathname === route;
          const path = router.pathname;
          const isActive = path?.includes(keyword);

          return (
            <Link key={label} to={route}>
              <Text
                width="100%"
                fontWeight={isActive ? "semibold" : "medium"}
                py="13px"
                bg={isActive ? "#25330F" : "transparent"}
                display="flex"
                fontSize="sm"
                gap="10px"
                px="20px"
                color={isActive ? "white" : "black"}
                borderRadius="12px"
                alignItems="center"
              >
                {icon}
                {label}
              </Text>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}
