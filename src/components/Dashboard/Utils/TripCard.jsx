import { Box, Text } from "@chakra-ui/react";
import { IoLocation } from "react-icons/io5";

export default function TripCard() {
  return (
    <Box minWidth="260px" flex="1 1 0px" aspectRatio="1 / 1">
      <Box
        width="100%"
        height="100%"
        backgroundImage='url("/images/cover_1.jpeg")'
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        borderRadius="16px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box padding="10px">
          <Text
            color="white"
            fontSize="xs"
            as="span"
            display="inline-flex"
            gap="6px"
            alignItems="center"
          >
            <Box boxSize="10px" bg="red" borderRadius="99px" />
            Completed
          </Text>
        </Box>
        <Box
          width="100%"
          bg="rgba(0, 0, 0, 0.5)"
          padding="15px 10px"
          borderBottomRadius="16px"
        >
          <Text color="white" fontSize="lg" fontWeight="semibold">
            Summer Vacation
          </Text>

          <Text
            color="white"
            fontSize="sm"
            fontWeight="medium"
            display="flex"
            alignItems="center"
            gap="10px"
            mt="4px"
          >
            <IoLocation /> Santorini
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
