import {
  Box,
  Text,
  FormControl,
  Input,
  Button,
  Checkbox,
  IconButton,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";
import { TbChecklist } from "react-icons/tb";
import { MdDelete, MdClear } from "react-icons/md";

export default function CheckList() {
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
        <Box display="flex" alignItems="center" gap="4px">
          <TbChecklist size="1.7rem" color="#00a15d" />

          <Editable
            fontSize="sm"
            fontWeight="medium"
            defaultValue="Places to eat"
            border="1px solid"
            borderRadius="md"
            borderColor="gray.300"
            px="4px"
          >
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Box>

        <Box>
          <IconButton
            icon={<MdDelete />}
            variant="ghost"
            borderRadius="99px"
            boxSize="30px"
            fontSize="lg"
            color="red.500"
            minWidth="auto"
          />
        </Box>
      </Box>
      <Box>
        <TableRow />
        <TableRow value="La marina consorto" />

        <Box
          px="1rem"
          py="1rem"
          maxWidth="400px"
          display="flex"
          alignItems="center"
          gap="20px"
        >
          <FormControl>
            <Input
              type="text"
              borderRadius="10px"
              borderColor="gray.300"
              color="black"
              height="40px"
            />
          </FormControl>

          <Button>Add</Button>
        </Box>
      </Box>
    </Box>
  );
}

const TableRow = ({ value = "La Monte Carlo" }) => {
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
    >
      <Checkbox colorScheme="green">
        <Text fontWeight="semibold" fontSize="sm">
          {value}
        </Text>
      </Checkbox>

      <Box>
        <IconButton
          icon={<MdClear />}
          variant="ghost"
          borderRadius="99px"
          boxSize="30px"
          fontSize="lg"
          minWidth="auto"
        />
      </Box>
    </Box>
  );
};
