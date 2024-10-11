import { Box, Text } from "@chakra-ui/react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { RoutePaths } from "../../lib/router/routePaths";
import { Link, useLocation } from "react-router-dom";
import { BsMenuAppFill } from "react-icons/bs";

export default function DefaultSidebar() {
  const router = useLocation();

  const defaultRoutes = [
    {
      icon: <TbLayoutDashboardFilled size="1.4rem" />,
      label: "Overview",
      route: RoutePaths.DASHBOARD,
      keyWord: "dashboard",
    },
    {
      icon: <TbLayoutDashboardFilled size="1.4rem" />,
      label: "Orders",
      route: RoutePaths.ORDERS,
      keyWord: "orders",
    },
    {
      icon: <BsMenuAppFill size="1.4rem" />,
      label: "Menu",
      route: RoutePaths.MENU,
      keyWord: "menu",
    },
    {
      icon: <TbLayoutDashboardFilled size="1.4rem" />,
      label: "QR Code",
      route: RoutePaths.QR_CODE,
      keyWord: "code",
    },
    {
      icon: <TbLayoutDashboardFilled size="1.4rem" />,
      label: "Employees",
      route: RoutePaths.EMPLOYEES,
      keyWord: "employees",
    },

    {
      icon: <TbLayoutDashboardFilled size="1.4rem" />,
      label: "Insights",
      route: RoutePaths.INSIGHT,
      keyWord: "insight",
    },
    {
      icon: <TbLayoutDashboardFilled size="1.4rem" />,
      label: "Settings",
      route: RoutePaths.SETTINGS,
      keyWord: "settings",
    },
  ];

  return (
    <Box height="100%">
      <Box height="100px" display="flex" alignItems="center" px="2rem">
        <Text
          color="#FFFFFF"
          fontSize="3xl"
          fontWeight="800"
          letterSpacing="-3px"
        >
          tabletap.
        </Text>
      </Box>

      <Box mt="80px">
        <Box display="flex" flexDirection="column" gap="2rem">
          {defaultRoutes?.map(({ icon, label, route, keyWord }, index) => {
            const path = router.pathname;
            const isActive = path?.includes(keyWord);

            return (
              <Link to={route} key={index}>
                <Box
                  width="100%"
                  bg="transparent"
                  fontSize="20px"
                  fontWeight="400"
                  color={isActive ? "brand.light" : "brand.gray"}
                  display="flex"
                  alignItems="center"
                  gap="10px"
                  position="relative"
                  px="2rem"
                >
                  {isActive && (
                    <Box
                      bg="brand.light"
                      width="6px"
                      height="100%"
                      borderRadius="20px"
                      position="absolute"
                      left="-1.2"
                      top="0"
                    />
                  )}
                  {icon}
                  {label}
                </Box>
              </Link>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
