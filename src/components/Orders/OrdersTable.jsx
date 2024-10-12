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
import { orderObject } from "../../lib/data/orderData";

export default function OrderTable() {
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
                  Order
                </Th>
                <Th color="white" textTransform="none">
                  Code
                </Th>
                {/* <Th color="white" textTransform="none">
                  Order type
                </Th> */}
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
                  Created
                </Th>
                <Th />
              </Tr>
            </Thead>
            <Tbody>
              {orderObject?.map((item, index) => {
                return (
                  <Tr key={index}>
                    <Td
                      fontSize="sm"
                      fontWeight="semibold"
                      borderBottom="1px solid"
                      borderBottomColor="gray.200"
                    >
                      <Link>{item.order_no}</Link>
                    </Td>

                    <Td
                      fontSize="sm"
                      fontWeight="semibold"
                      borderBottom="1px solid"
                      borderBottomColor="gray.200"
                    >
                      {item.code_name}
                    </Td>
                    {/* <Td
                  fontSize="sm"
                  fontWeight="semibold"
                  borderBottom="1px solid"
                  borderBottomColor="gray.200"
                >
                  Dine-in
                </Td> */}
                    <Td borderBottom="1px solid" borderBottomColor="gray.200">
                      <StatusTag status={item.status} />
                    </Td>
                    <Td
                      fontSize="sm"
                      fontWeight="semibold"
                      borderBottom="1px solid"
                      borderBottomColor="gray.200"
                    >
                      ${item.amount}
                    </Td>
                    <Td
                      fontSize="sm"
                      fontWeight="semibold"
                      borderBottom="1px solid"
                      borderBottomColor="gray.200"
                    >
                      {item.payment_option}
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
                      <ActionItems status={item.status} />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>

        <Pagination disableNext={4} />
      </Box>
    </Box>
  );
}

const ActionItems = ({ status }) => {
  const STATUS = status.toUpperCase();

  return (
    <Box display="flex" gap="4px" justifyContent="flex-end">
      {STATUS === "PENDING" && (
        <Button height="30px" fontSize="sm" bg="#4CAF50">
          Accept
        </Button>
      )}

      {STATUS === "ACCEPTED" && (
        <Button height="30px" fontSize="sm" bg="#3F51B5">
          Complete
        </Button>
      )}

      {STATUS === "PENDING" && (
        <Button height="30px" fontSize="sm" bg="#F44336">
          Decline
        </Button>
      )}
    </Box>
  );
};
