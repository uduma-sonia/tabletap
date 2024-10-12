import { Box, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function MenuCard({ route, name }) {
  return (
    <Box minWidth={{ base: "100%", md: "250px" }} width="250px">
      <Link to={route}>
        <Box
          border="1px solid"
          borderColor="gray.300"
          borderRadius="10px"
          bg="white"
          width="100%"
        >
          <Box height="180px" borderRadius="10px">
            <Image
              src="/images/menu_bg.jpg"
              borderRadius="10px"
              width="100%"
              objectFit="cover"
              height="100%"
            />
          </Box>

          <Box padding="10px">
            <Text fontSize="sm" fontWeight="semibold">
              {name}
            </Text>
            <Text fontSize="sm" fontWeight="semibold">
              20 items
            </Text>
          </Box>
        </Box>
      </Link>
    </Box>
  );
}
