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
} from "@chakra-ui/react";

export default function CreateMenuCategoryModal({ onClose, isOpen }) {
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
          Create Menu Category
        </ModalHeader>
        <ModalCloseButton color="white" />

        <ModalBody mt="1rem">
          <FormControl>
            <FormLabel fontWeight="600" fontSize="sm">
              Name
            </FormLabel>
            <Input placeholder="Beverages" />
          </FormControl>

          <FormControl mt="1.5rem">
            <FormLabel fontWeight="600" fontSize="sm">
              Description
            </FormLabel>
            <Textarea
              borderColor="black"
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
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button height="40px">Create</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
