import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Input,
  FormLabel,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { countries } from "../../lib/data/countries";

export default function GenerateCodeModal({ onClose, isOpen }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />

      <ModalContent borderRadius="16px">
        <ModalHeader
          fontSize="md"
          bg="#031c03"
          color="white"
          borderTopRadius="16px"
          fontWeight="semibold"
        >
          Generate code
        </ModalHeader>
        <ModalCloseButton color="white" />

        <ModalBody mt="1rem">
          <FormControl>
            <FormLabel fontWeight="600" fontSize="sm">
              Code Name
            </FormLabel>
            <Input placeholder="Beverages" />
          </FormControl>

          <FormControl my="1.5rem">
            <FormLabel fontWeight="600" fontSize="sm">
              Description
            </FormLabel>
            <Textarea
              borderColor="brand.gray"
              borderRadius="10px"
              fontWeight="600"
              color="#222222"
              fontSize="sm"
              _hover={{ border: "1px solid black" }}
              _focus={{ border: "none" }}
              _active={{ border: "none", outline: "none" }}
              outline="none"
              focusBorderColor="none"
              resize="none"
              rows={3}
              placeholder="Description"
            />
          </FormControl>

          <FormControl>
            <FormLabel fontWeight="600" fontSize="sm">
              Assign to (optional)
            </FormLabel>
            <Select>
              {countries.map((item) => {
                return (
                  <option value={item.name} key={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter mt="2rem">
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button height="40px">Create</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
