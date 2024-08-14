import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Box,
  FormLabel,
} from "@chakra-ui/react";

export default function ExtraInformation() {
  const list = [
    {
      title: "Depature flight",
      value: "QUO39822",
    },
    {
      title: "Arrival flight",
      value: "LOS6683",
    },
    {
      title: "Travel insurance",
      value: "6987H3BF-33",
    },
    {
      title: "Emergency contact",
      value: "008029823",
    },
  ];
  return (
    <Box>
      <FormLabel
        fontSize="xs"
        color="brand.textLight"
        fontFamily="Manrope Variable"
        mb="5px"
        fontWeight="700"
      >
        EXTRA INFORMATION
      </FormLabel>
      <TableContainer>
        <Table variant="simple">
          <Tbody border="none">
            {list.map((item) => {
              return (
                <Tr fontSize="sm" color="white" height="45px" key={item.title}>
                  <Td
                    border="1px solid"
                    fontWeight="600"
                    borderColor="brand.light"
                    py="0px"
                    width="150px"
                    px="10px"
                    overflow="hidden"
                    maxW="150px"
                  >
                    {item.title}
                  </Td>
                  <Td
                    border="1px solid"
                    borderColor="brand.light"
                    fontWeight="600"
                    py="0px"
                    px="10px"
                  >
                    {item.value}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
