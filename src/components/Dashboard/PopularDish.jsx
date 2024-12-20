import { Box, Text } from "@chakra-ui/react";

export default function PopularDish() {
  return (
    <Box
      bg="white"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="16px"
      boxShadow="sm"
      padding="16px"
    >
      <Text fontSize="sm" fontWeight="700">
        Popular dish this week
      </Text>
      <Text fontSize="xs" fontWeight="medium">
        Items your customers ordered
      </Text>

      <Box
        mt="10px"
        bg="white"
        borderRadius="10px"
        border="1px solid"
        borderColor="brand.primary"
        boxShadow="xs"
        pb="10px"
      >
        <Box
          borderBottom="1px solid"
          borderBottomColor="gray.200"
          py="10px"
          px="10px"
        >
          <Text fontWeight="700">Menu</Text>
        </Box>

        <Box px="10px">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="10px"
          >
            <Text fontSize="sm" fontWeight="600">
              Pasta
            </Text>
            <Text fontSize="sm">30</Text>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="10px"
          >
            <Text fontSize="sm" fontWeight="600">
              Toast
            </Text>
            <Text fontSize="sm">27</Text>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="10px"
          >
            <Text fontSize="sm" fontWeight="600">
              Butter chicken
            </Text>
            <Text fontSize="sm">20</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
