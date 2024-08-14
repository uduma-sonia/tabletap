import Header from "../Layout/Header";
import { Box } from "@chakra-ui/react";
import MyTrips from "./MyTrips";
import CheckList from "./CheckList";

export default function DashboardView() {
  return (
    <Box>
      <Header />

      <Box
        display="flex"
        py="1.5rem"
        px={{ base: "1rem", md: "2rem", lg: "3rem", xl: "4rem" }}
        gap="1rem"
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box flex="1 1 0px">
          <MyTrips />
        </Box>

        <Box width={{ base: "100%", lg: "400px" }}>
          <CheckList />
        </Box>
      </Box>
    </Box>
  );
}
