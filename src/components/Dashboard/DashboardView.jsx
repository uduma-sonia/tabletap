import Header from "../Layout/Header";
import { Box } from "@chakra-ui/react";
import MyTrips from "./MyTrips";
import CheckList from "./CheckList";
import { DateRange } from "react-date-range";

export default function DashboardView() {
  const dateRange = {
    startDate: new Date("2024-09-04T22:12:49.004Z"),
    endDate: new Date("2024-09-16T22:12:49.004Z"),
    key: "selection",
    color: "#25330F",
  };

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

          <Box
            mt="1rem"
            borderRadius="16px"
            backgroundColor="white"
            boxShadow="sm"
            width="100%"
            padding={{ base: "2px", lg: "20px" }}
          >
            <Box
              border="1px"
              borderColor="gray.300"
              borderRadius="14px"
              width="fit-content"
              boxShadow="md"
              mx={{ base: "auto", lg: "0px" }}
            >
              <DateRange
                onChange={(e) => console.log("e:", e)}
                showDateDisplay={false}
                ranges={[dateRange]}
                className="date_range_shc"
              />
            </Box>
          </Box>
        </Box>

        <Box width={{ base: "100%", lg: "400px" }}>
          <CheckList />
        </Box>
      </Box>
    </Box>
  );
}
