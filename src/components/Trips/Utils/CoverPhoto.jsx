import { Box, Text } from "@chakra-ui/react";
import { IoLocation } from "react-icons/io5";
import { GiIsland } from "react-icons/gi";

export default function CoverPhoto() {
  return (
    <Box
      height="250px"
      backgroundImage='url("/images/cover_1.jpeg")'
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      borderRadius="16px"
      display="flex"
      alignItems="flex-end"
    >
      <Box
        width="100%"
        bg="rgba(0, 0, 0, 0.5)"
        padding="15px 10px"
        borderBottomRadius="16px"
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
        gap="1.5rem"
      >
        <Box>
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

        <Box>
          <Text
            color="white"
            fontSize="xs"
            as="span"
            display="inline-flex"
            gap="6px"
            alignItems="center"
            fontWeight="semibold"
          >
            <Box boxSize="10px" bg="#fabd05" borderRadius="99px" />
            In progress
            <GiIsland color="white" size="1.6rem" />
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
