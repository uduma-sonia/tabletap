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
import { Link } from "react-router-dom";
import { Pagination } from "../Common/Pagination";
import StatusTag from "../Common/StatusTag";

export default function EmployeesTable() {
  return (
    <Box>
      <Box
        bg="white"
        borderRadius="10px"
        border="1px solid"
        borderColor="brand.primary"
        boxShadow="xs"
      >
        <TableContainer position="relative" borderTopRadius="10px" zIndex={9}>
          <Table variant="simple">
            <Thead bg="brand.dark" height="50px">
              <Tr>
                <Th color="white" textTransform="none">
                  Name
                </Th>
                <Th color="white" textTransform="none">
                  Email
                </Th>
                <Th color="white" textTransform="none">
                  Position
                </Th>
                <Th color="white" textTransform="none">
                  Role
                </Th>
                <Th color="white" textTransform="none">
                  Assigned to
                </Th>
                <Th color="white" textTransform="none">
                  Orders
                </Th>
                <Th color="white" textTransform="none">
                  Status
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
                  <Link>John Paul</Link>
                </Td>

                <Td
                  fontSize="sm"
                  fontWeight="semibold"
                  borderBottom="1px solid"
                  borderBottomColor="gray.200"
                >
                  jonpaul@gmail.com
                </Td>
                <Td
                  fontSize="sm"
                  fontWeight="semibold"
                  borderBottom="1px solid"
                  borderBottomColor="gray.200"
                >
                  Chef
                </Td>

                <Td
                  fontSize="sm"
                  fontWeight="semibold"
                  borderBottom="1px solid"
                  borderBottomColor="gray.200"
                >
                  Employee
                </Td>
                <Td
                  fontSize="sm"
                  fontWeight="semibold"
                  borderBottom="1px solid"
                  borderBottomColor="gray.200"
                >
                  Asana
                </Td>
                <Td
                  fontSize="sm"
                  fontWeight="semibold"
                  borderBottom="1px solid"
                  borderBottomColor="gray.200"
                >
                  9
                </Td>
                <Td
                  fontSize="sm"
                  fontWeight="semibold"
                  borderBottom="1px solid"
                  borderBottomColor="gray.200"
                >
                  <StatusTag status="Accepted" label="Active" />
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
        Disable
      </Button>
      <Button height="30px" fontSize="sm" bg="#F44336">
        Remove
      </Button>
    </Box>
  );
};
