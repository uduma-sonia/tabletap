import { Box, Text } from "@chakra-ui/react";
import OngoingOrders from "./OngoingOrders";
import PendingOrders from "./PendingOrders";
import StatCard from "./StatCard";

export default function DashboardView() {
  return (
    <Box>
      <Text fontSize="sm" fontWeight="semibold" mb="20px">
        What is going on today?
      </Text>

      <Box
        display="grid"
        gap="10px"
        gridTemplateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
      >
        <StatCard label="Total orders today" value="2" />
        <StatCard label="Total sales" value="$200" />
        <StatCard label="Total clients" value="4" />
        <StatCard label="Active menus" value="30" />
      </Box>
      <br />
      <br />
      <PendingOrders />
      <br />
      <br />
      <OngoingOrders />
    </Box>
  );
}
