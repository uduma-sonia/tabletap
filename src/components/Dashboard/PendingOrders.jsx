import {
  Table,
  Thead,
  Tr,
  Th,
  TableContainer,
  Box,
  Tbody,
  Td,
  Button,
  Text,
} from "@chakra-ui/react";
import StatusTag from "../Common/StatusTag";
import { Link } from "react-router-dom";
import { Pagination } from "../Common/Pagination";

export default function PendingOrders() {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="700">
        Pending orders (1)
      </Text>
      <Text fontSize="sm" fontWeight="medium">
        Orders sent in and not accepted
      </Text>
      <Box
        mt="10px"
        bg="white"
        borderRadius="10px"
        border="1px solid"
        borderColor="brand.primary"
        boxShadow="xs"
      >
        <TableContainer position="relative" borderTopRadius="10px" zIndex={9}>
          <Table variant="simple">
            <Thead bg="brand.dar" height="50px">
              <Tr>
                <Th
                  color="brand.dark"
                  textTransform="none"
                  borderBottom="1px solid"
                  borderBottomColor="brand.dark"
                >
                  Order
                </Th>
                <Th
                  color="brand.dark"
                  textTransform="none"
                  borderBottom="1px solid"
                  borderBottomColor="brand.dark"
                >
                  Table number / name
                </Th>

                <Th
                  color="brand.dark"
                  textTransform="none"
                  borderBottom="1px solid"
                  borderBottomColor="brand.dark"
                >
                  Status
                </Th>
                <Th
                  color="brand.dark"
                  textTransform="none"
                  borderBottom="1px solid"
                  borderBottomColor="brand.dark"
                >
                  Amount
                </Th>
                <Th
                  color="brand.dark"
                  textTransform="none"
                  borderBottom="1px solid"
                  borderBottomColor="brand.dark"
                >
                  Payment{" "}
                </Th>
                <Th
                  color="brand.dark"
                  textTransform="none"
                  borderBottom="1px solid"
                  borderBottomColor="brand.dark"
                >
                  Created
                </Th>
                <Th
                  color="brand.dark"
                  textTransform="none"
                  borderBottom="1px solid"
                  borderBottomColor="brand.dark"
                />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td
                  fontSize="sm"
                  fontWeight="semibold"
                  borderBottom="1px solid"
                  borderBottomColor="gray.200"
                  textDecor="underline"
                >
                  <Link>#1009</Link>
                </Td>

                <Td
                  fontSize="sm"
                  fontWeight="semibold"
                  borderBottom="1px solid"
                  borderBottomColor="gray.200"
                >
                  11
                </Td>
                <Td borderBottom="1px solid" borderBottomColor="gray.200">
                  <StatusTag status="PENDING" />
                </Td>
                <Td
                  fontSize="sm"
                  fontWeight="semibold"
                  borderBottom="1px solid"
                  borderBottomColor="gray.200"
                >
                  $1000
                </Td>
                <Td
                  fontSize="sm"
                  fontWeight="semibold"
                  borderBottom="1px solid"
                  borderBottomColor="gray.200"
                >
                  Group pay
                </Td>
                <Td
                  fontSize="sm"
                  fontWeight="semibold"
                  borderBottom="1px solid"
                  borderBottomColor="gray.200"
                >
                  2 min ago
                </Td>
                <Td borderBottom="1px solid" borderBottomColor="gray.200">
                  <ActionItems />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <Pagination disableNext={4} />
      </Box>
    </Box>
  );
}

const ActionItems = () => {
  return (
    <Box display="flex" gap="4px" justifyContent="flex-end">
      <Button height="30px" fontSize="sm">
        Accept
      </Button>
      <Button height="30px" fontSize="sm" bg="#F44336">
        Decline
      </Button>
    </Box>
  );
};
