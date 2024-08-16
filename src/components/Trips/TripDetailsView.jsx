import Header from "../Layout/Header";
import { Box, Checkbox, Text, Button } from "@chakra-ui/react";
import CoverPhoto from "./Utils/CoverPhoto";
import Itinerary from "./Utils/Itinerary";
import Hotel from "./Utils/Hotel";
import Budget from "./Utils/Budget";
import ExtraInformation from "./Utils/ExtraInformation";
import CheckList from "./Utils/CheckList";

export default function TripDetailsView() {
  return (
    <Box>
      <Header title="Summer 2024" subText="Santorini" />

      <Box
        display="flex"
        pt="1.5rem"
        pb="150px"
        px={{ base: "1rem", md: "2rem", lg: "3rem", xl: "4rem" }}
        gap="1rem"
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box flex="1 1 0px">
          <CoverPhoto />

          <Box
            mt="1rem"
            mb="2rem"
            display="flex"
            alignItems="center"
            gap="10px"
            justifyContent="space-between"
          >
            <Box>
              <Checkbox colorScheme="green" borderColor="black">
                <Text color="black" fontWeight="semibold" fontSize="">
                  Trip started
                </Text>
              </Checkbox>
            </Box>

            <Box display="flex" alignItems="center" gap="10px">
              <Button>Add Checklist</Button>
              <Button>Invite user</Button>
            </Box>
          </Box>

          <Box
            mb="1rem"
            display="flex"
            width="100%"
            gap="1rem"
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Itinerary />

            <Hotel />
          </Box>

          <Budget />

          <Box my="1rem">
            <ExtraInformation />
          </Box>

          <CheckList />
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
  );
}
