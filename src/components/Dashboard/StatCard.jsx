import { Box, Text } from "@chakra-ui/react";
import { BsGraphUpArrow } from "react-icons/bs";

export default function StatCard({ label, value, showBottomIcon = false }) {
  return (
    <Box
      border="1px solid"
      borderColor="gray.200"
      borderRadius="16px"
      bg="white"
      boxShadow="sm"
      padding="16px"
    >
      <Text fontWeight="700" fontSize="sm">
        {label}
      </Text>

      <Text fontSize="2xl" fontWeight="medium" my="10px">
        {value}
      </Text>

      {showBottomIcon && <BsGraphUpArrow color="#228B22" size="1.2rem" />}
    </Box>
  );
}
