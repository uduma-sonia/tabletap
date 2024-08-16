import Header from "../Layout/Header";
import { Box, Checkbox, Text } from "@chakra-ui/react";
import CoverPhoto from "./Utils/CoverPhoto";
import Itinerary from "./Utils/Itinerary";
import Hotel from "./Utils/Hotel";
import Budget from "./Utils/Budget";

export default function TripDetailsView() {
  return (
    <Box>
      <Header title="Summer 2024" subText="Santorini" />

      <Box>
        <Box
          display="flex"
          py="1.5rem"
          px={{ base: "1rem", md: "2rem", lg: "3rem", xl: "4rem" }}
          gap="1rem"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Box flex="1 1 0px">
            <CoverPhoto />

            <Box mt="1rem">
              <Checkbox colorScheme="green" borderColor="black">
                <Text color="black" fontWeight="semibold" fontSize="">
                  Trip started
                </Text>
              </Checkbox>
            </Box>

            <Box
              my="1rem"
              display="flex"
              width="100%"
              gap="2rem"
              flexDirection={{ base: "column", lg: "row" }}
            >
              <Itinerary />

              <Hotel />
            </Box>

            <Budget />
          </Box>

          <Box
            width={{ base: "100%", lg: "400px" }}
            border="1px solid black"
            height="200px"
          >
            RIGHT
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
