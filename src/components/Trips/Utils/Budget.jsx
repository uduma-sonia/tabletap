import {
  Box,
  Text,
  Editable,
  EditableInput,
  EditablePreview,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { MdClear } from "react-icons/md";

export default function Budget() {
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
          Budget
        </Text>
        <Box display="flex" alignItems="center" gap="4px">
          $
          <Editable
            fontSize="sm"
            fontWeight="medium"
            defaultValue="2000"
            border="1px solid"
            borderRadius="md"
            borderColor="gray.300"
            px="4px"
          >
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Box>
      </Box>
      <Box>
        <TableRow />
        <TableRow />
        <TableRow item="Total" value={30000} isTotal />
        <TableRow item="Amount left" value={600} isTotal />

        <Box px="1rem" py="1rem" maxWidth="300px">
          <FormControl>
            <FormLabel fontWeight="medium" fontSize="sm" mb="0px">
              Currency
            </FormLabel>

            <Select width="150px" borderColor="gray.300" height="40px">
              <option>NGN</option>
              <option>USD</option>
            </Select>
          </FormControl>
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
              Budget
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

const TableRow = ({ item = "Flight", value = 1500, isTotal = false }) => {
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
        {!isTotal && (
          <IconButton
            icon={<MdClear />}
            variant="ghost"
            fontSize="lg"
            height="auto"
            minWidth="auto"
            display="none"
            _groupHover={{ display: "flex" }}
          />
        )}

        <Text fontWeight={isTotal ? "700" : "medium"}>{item}</Text>
      </Box>

      <Box>
        <Text fontWeight={isTotal ? "700" : "medium"}>${value}</Text>
      </Box>
    </Box>
  );
};
