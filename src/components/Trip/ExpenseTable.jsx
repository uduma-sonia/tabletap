import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import { getCurrencySymbol } from "../../lib/helper";

export default function ExpenseTable() {
  const expenseList = [
    {
      label: "Flight",
      budget: 300,
      actual: 0,
    },
    {
      label: "Hotel/Airbnb",
      budget: 400,
      actual: 0,
    },
    {
      label: "Other",
      budget: 200,
      actual: 0,
    },
  ];

  let selectedCurrency = "USD";

  if (localStorage.getItem("app-currency") !== null) {
    selectedCurrency = localStorage.getItem("app-currency");
  }

  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr bg="brand.light" borderRadius="5px">
              <Th
                color="gray.700"
                border="1px solid"
                borderColor="brand.light"
                py="7px"
              >
                EXPENSE
              </Th>
              <Th
                color="gray.700"
                border="1px solid"
                borderColor="brand.light"
                py="5px"
              >
                BUDGET
              </Th>
              <Th
                color="gray.700"
                border="1px solid"
                borderColor="brand.light"
                py="5px"
              >
                ACTUAL
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {expenseList.map((item) => {
              return (
                <Tr fontSize="sm" color="white" key={item.label} height="45px">
                  <Td border="1px solid" borderColor="brand.light" py="0px">
                    {item.label}
                  </Td>
                  <Td border="1px solid" borderColor="brand.light" py="0px">
                    {getCurrencySymbol(selectedCurrency)}
                    {item.budget}
                  </Td>
                  <Td border="1px solid" borderColor="brand.light" py="0px">
                    ₦{item.actual}
                  </Td>
                </Tr>
              );
            })}
            <Tr fontSize="sm" color="white" height="45px">
              <Td
                border="1px solid"
                fontWeight="600"
                borderColor="brand.light"
                py="0px"
              >
                Total:
              </Td>
              <Td
                border="1px solid"
                borderColor="brand.light"
                fontWeight="600"
                py="0px"
              >
                {getCurrencySymbol(selectedCurrency)}900
              </Td>
              <Td
                border="1px solid"
                borderColor="brand.light"
                fontWeight="600"
                py="0px"
              >
                ₦0
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
