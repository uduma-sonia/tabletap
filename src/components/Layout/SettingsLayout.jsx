import DashboardLayout from "./DashboardLayout";
import { Box, Button } from "@chakra-ui/react";
import { RoutePaths } from "../../lib/router/routePaths";
import { Link, useLocation } from "react-router-dom";

export default function SettingsLayout({ children }) {
  const router = useLocation();

  // ACCOUNT - company name, personal domain, logo, desription, employees, view website, company email
  // PROFILE - name, email, position
  // MENU - variants, dietary options, enable customer to order from site, close menu
  // SECURITY - password, email
  // xibeda3252@chainds.com
  const defaultRoutes = [
    {
      label: "Account",
      route: RoutePaths.SETTINGS_ACCOUNT,
      keyWord: "account",
    },
    {
      label: "Profile",
      route: RoutePaths.SETTINGS_PROFILE,
      keyWord: "profile",
    },
    {
      label: "Menu",
      route: RoutePaths.SETTINGS_MENU,
      keyWord: "settings/menu",
    },
    {
      label: "Security",
      route: RoutePaths.SETTINGS_SECURITY,
      keyWord: "security",
    },
  ];

  return (
    <DashboardLayout>
      <Box display="flex" alignItems="center" gap="6px">
        {defaultRoutes?.map(({ label, route, keyWord }, index) => {
          const path = router.pathname;
          const isActive = path?.includes(keyWord);

          return (
            <Link key={index} to={route}>
              <Button
                bg={isActive ? "gray.200" : ""}
                height="auto"
                py="6px"
                width="auto"
                px="6px"
                fontWeight={isActive ? "600" : "500"}
                color="black"
                fontSize="sm"
                boxShadow="none"
              >
                {label}
              </Button>
            </Link>
          );
        })}
      </Box>
      <Box mt="1rem">{children}</Box>
    </DashboardLayout>
  );
}
