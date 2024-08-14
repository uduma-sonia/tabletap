import { Box, Text } from "@chakra-ui/react";
import TripCard from "./Utils/TripCard";

export default function MyTrips() {
  return (
    <Box>
      <Text fontWeight="semibold" fontSize="lg">
        My Trips
      </Text>

      <Box
        mt="1rem"
        display="flex"
        gap="20px"
        flexWrap="nowrap"
        overflowY="auto"
      >
        <TripCard />
        <TripCard />
        <TripCard />
      </Box>
    </Box>
  );
}
