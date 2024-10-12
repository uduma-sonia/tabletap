import { Box, Spacer, Text } from "@chakra-ui/react";
import OngoingOrders from "./OngoingOrders";
import PendingOrders from "./PendingOrders";
import StatCard from "./StatCard";
import PopularDish from "./PopularDish";
import PopularTable from "./PopularTable";

export default function DashboardView() {
  return (
    <Box>
      <Text fontSize="sm" fontWeight="semibold" mb="20px">
        What&apos;s going on today?
      </Text>

      <Box
        display="grid"
        gap="10px"
        gridTemplateColumns={{
          base: "1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
      >
        <StatCard label="Total orders today" value="2" showBottomIcon />
        <StatCard label="Total sales" value="₦200" showBottomIcon />
        <StatCard label="Total clients" value="4" showBottomIcon />
        <StatCard label="Active menus" value="30" />
      </Box>

      <Box
        mt="10px"
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        gap="10px"
      >
        <Box width={{ base: "100%", lg: "75%" }}>
          <PendingOrders />
          <Spacer mt="10px" />
          <OngoingOrders />
        </Box>
        <Box width={{ base: "100%", lg: "25%" }}>
          <PopularDish />
          <Spacer mt="10px" />
          <PopularTable />
        </Box>
      </Box>
    </Box>
  );
}
