import { Box, Button } from "@chakra-ui/react";
import Header from "../Layout/Header";
import TripCard from "./Utils/TripCard";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function AllTripsView() {
  return (
    <Box>
      <Header title="Your trips" />

      <Box
        py="1.5rem"
        px={{ base: "1rem", md: "2rem", lg: "3rem", xl: "4rem" }}
      >
        <Box
          mt="1rem"
          gap="20px"
          display="grid"
          gridTemplateColumns={{
            base: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr",
            lg: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <Box aspectRatio="1 / 1">
            <Button
              variant="unstyled"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="16px"
              bg="#25330F20"
              _hover={{ bg: "#25330F30" }}
              height="100%"
              width="100%"
            >
              <AiOutlinePlus size="1.7rem" />
            </Button>
          </Box>
          <Link to="/trip/poscj4030roie">
            <TripCard />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
