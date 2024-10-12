import OrdersTable from "./OrdersTable";
import { Box, Button, Text } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import SearchBar from "../Common/SearchBar";
import { Link } from "react-router-dom";
import { RiSettings5Line } from "react-icons/ri";

export default function OrdersView() {
  return (
    <div>
      <Box
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={{ lg: "center" }}
        justifyContent="space-between"
        gap="10px"
      >
        <Box>
          <Button height="40px" rightIcon={<AiOutlinePlus />} bg="brand.dark">
            Create Order
          </Button>
        </Box>

        <Box>
          <SearchBar placeholder="Search order" />
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        gap="10px"
        my="1.5rem"
      >
        <Link>
          <Text
            fontSize="xs"
            textDecor="underline"
            color="blue.700"
            display="flex"
            alignItems="center"
            gap="6px"
            fontWeight="600"
          >
            Order settings
            <RiSettings5Line size="14px" />
          </Text>
        </Link>
      </Box>

      <OrdersTable />
    </div>
  );
}
