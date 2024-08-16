import Header from "../Layout/Header";
import { Box } from "@chakra-ui/react";
import MyTrips from "./MyTrips";
import CheckList from "./CheckList";
import { Calendar } from "react-date-range";
import { useState } from "react";
import { startOfMonth, endOfMonth } from "date-fns";

export default function DashboardView() {
  const [dateRange, setDateRange] = useState({
    startDate: startOfMonth(new Date()),
    endDate: endOfMonth(new Date()),
    key: "selection",
  });
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

          <Box bg="plum" mt="1rem">
            <Calendar
              date={new Date()}
              onChange={(e) => console.log("e:", e)}
              // moveRangeOnFirstSelection={false}
              // ranges={[dateRange]}
              // rangeColors={["#00A15D"]}
            />
          </Box>
        </Box>

        <Box width={{ base: "100%", lg: "400px" }}>
          <CheckList />
        </Box>
      </Box>
    </Box>
  );
}
