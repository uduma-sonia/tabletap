import { Box, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function QRCodeCard({ route }) {
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
          <Box height="180px" borderRadius="10px" p="6px">
            <Image
              src="/images/qrcode_placeholder.jpeg"
              borderRadius="10px"
              width="100%"
              objectFit="cover"
              height="100%"
            />
          </Box>

          <Box padding="10px">
            <Text>Pearl</Text>
            <Text fontSize="sm" fontWeight="semibold">
              Active
            </Text>
            <Text fontSize="sm" fontWeight="semibold">
              Assigned:
            </Text>
          </Box>
        </Box>
      </Link>
    </Box>
  );
}
