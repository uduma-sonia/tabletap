import { Box, Text } from "@chakra-ui/react";
import { MdLink } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Hotel() {
  return (
    <Box
      borderRadius="16px"
      //   maxWidth="400px"
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
          Hotel Address
        </Text>
        <Link to="https://maps.app.goo.gl/c1jUaCrqQ528vcUU7" target="_blank">
          <Text fontSize="24px" color="blue">
            <MdLink />
          </Text>
        </Link>
      </Box>
      <Box display="flex" alignItems="center" px="1rem" py="1rem">
        <Box>
          <Text fontSize="sm" fontWeight="medium">
            Santorini
          </Text>
          <Text fontWeight="semibold" fontSize="lg">
            Villa Kavallaris & Apartments Santorini
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
