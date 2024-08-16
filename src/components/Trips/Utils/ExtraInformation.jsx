import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { MdClear } from "react-icons/md";

export default function ExtraInformation() {
  return (
    <Box
      borderRadius="16px"
      backgroundColor="white"
      boxShadow="sm"
      maxW="600px"
    >
      <Box
        borderBottom="1px"
        borderBottomColor="gray.300"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height="50px"
        px="1rem"
      >
        <Text fontSize="sm" fontWeight="semibold">
          Extra Information
        </Text>
      </Box>
      <Box>
        <TableRow item="Travel insurance #" value="8763e893h" />
        <TableRow item="Emergency contact" value="+2347011523596" />
        <TableRow item="Passport number" value="" />
        <TableRow item="Depature details" value="" />

        <Box px="1rem" py="1rem" maxWidth="300px">
          <FormControl mt="1rem">
            <FormLabel fontWeight="medium" fontSize="sm" mb="0px">
              Item
            </FormLabel>
            <Input
              type="text"
              borderRadius="10px"
              borderColor="gray.300"
              color="black"
              height="40px"
            />
          </FormControl>
          <FormControl mt="1rem">
            <FormLabel fontWeight="medium" fontSize="sm" mb="0px">
              Value
            </FormLabel>
            <Input
              type="text"
              borderRadius="10px"
              borderColor="gray.300"
              color="black"
              height="40px"
            />
          </FormControl>

          <Button mt="2rem">Add</Button>
        </Box>
      </Box>
    </Box>
  );
}

const TableRow = ({ item = "Flight", value = 1500 }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px="1rem"
      py="10px"
      borderBottom="1px"
      borderBottomColor="gray.300"
      gap="1rem"
      className="group"
    >
      <Box display="flex" alignItems="center" gap="6px">
        <IconButton
          icon={<MdClear />}
          variant="ghost"
          fontSize="lg"
          height="auto"
          minWidth="auto"
          display="none"
          _groupHover={{ display: "flex" }}
        />

        <Text fontWeight="medium">{item}</Text>
      </Box>

      <Box>
        <Text fontWeight="medium">{value}</Text>
      </Box>
    </Box>
  );
};
