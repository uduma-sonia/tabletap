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
} from "@chakra-ui/react";
import StatusTag from "../Common/StatusTag";
import { Link } from "react-router-dom";
import { Pagination } from "../Common/Pagination";

export default function EmployeesTable() {
  return (
    <Box>
      <Box
        bg="white"
        borderRadius="10px"
        border="1px solid"
        borderColor="gray.300"
        boxShadow="xs"
      >
        <TableContainer position="relative" borderTopRadius="10px" zIndex={9}>
          <Table variant="simple">
            <Thead bg="brand.dark" height="50px">
              <Tr>
                <Th color="white" textTransform="none">
                  Order
                </Th>
                <Th color="white" textTransform="none">
                  Table number / name
                </Th>
                <Th color="white" textTransform="none">
                  Order type
                </Th>
                <Th color="white" textTransform="none">
                  Status
                </Th>
                <Th color="white" textTransform="none">
                  Amount
                </Th>
                <Th color="white" textTransform="none">
                  Payment{" "}
                </Th>
                <Th color="white" textTransform="none">
                  Date
                </Th>
                <Th />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td
                  fontSize="sm"
                  fontWeight="semibold"
                  borderBottom="1px solid"
                  borderBottomColor="gray.200"
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
                <Td
                  fontSize="sm"
                  fontWeight="semibold"
                  borderBottom="1px solid"
                  borderBottomColor="gray.200"
                >
                  Dine-in
                </Td>
                <Td borderBottom="1px solid" borderBottomColor="gray.200">
                  <StatusTag status="SERVED" />
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
              <Tr>
                <Td
                  fontSize="sm"
                  fontWeight="semibold"
                  borderBottom="1px solid"
                  borderBottomColor="gray.200"
                >
                  #1009
                </Td>

                <Td
                  fontSize="sm"
                  fontWeight="semibold"
                  borderBottom="1px solid"
                  borderBottomColor="gray.200"
                >
                  11
                </Td>
                <Td
                  fontSize="sm"
                  fontWeight="semibold"
                  borderBottom="1px solid"
                  borderBottomColor="gray.200"
                >
                  Dine-in
                </Td>
                <Td borderBottom="1px solid" borderBottomColor="gray.200">
                  <StatusTag status="SERVED" />
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
