import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function MenuCard({ children, route }) {
  return (
    <Link to={route}>
      <Box
        border="1px solid"
        borderColor="brand.gray"
        borderRadius="16px"
        height="150px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {children ? (
          children
        ) : (
          <Text fontSize="lg" fontWeight="medium">
            Desserts
          </Text>
        )}
      </Box>
    </Link>
  );
}
