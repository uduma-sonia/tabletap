import { Box, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa6";

export default function Itinerary() {
  return (
    <Box
      borderRadius="16px"
      backgroundColor="white"
      boxShadow="sm"
      width={{ base: "100%", lg: "50%" }}
    >
      <Box
        borderBottom="1px"
        borderBottomColor="gray.300"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height="50px"
        px="1rem"
      >
        <Text fontSize="sm" fontWeight="semibold">
          Itinerary
        </Text>
        <Text fontSize="sm" fontWeight="medium">
          7 days
        </Text>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px="1rem"
        py="1rem"
      >
        <Box>
          <Text fontSize="sm" fontWeight="medium">
            Trip starts
          </Text>
          <Text fontWeight="semibold" fontSize="lg">
            14 Sept
          </Text>
        </Box>

        <Box>
          <Text>
            <FaArrowRight />
          </Text>
        </Box>

        <Box>
          <Text fontSize="sm" fontWeight="medium" textAlign="right">
            2024
          </Text>
          <Text fontWeight="semibold" fontSize="lg">
            20 Sept
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
