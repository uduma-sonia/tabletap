import { Box, Text } from "@chakra-ui/react";
import { BsGraphUpArrow } from "react-icons/bs";

export default function StatCard({ label, value }) {
  return (
    <Box
      border="1px solid"
      borderColor="brand.primary"
      borderRadius="16px"
      bg="white"
      padding="16px"
    >
      <Text fontWeight="medium">{label}</Text>

      <Text fontSize="3xl" fontWeight="semibold" my="10px">
        {value}
      </Text>

      <BsGraphUpArrow color="#228B22" size="1.2rem" />
    </Box>
  );
}
