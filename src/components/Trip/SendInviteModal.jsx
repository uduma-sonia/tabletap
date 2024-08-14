/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Input,
  Divider,
  Box,
} from "@chakra-ui/react";

export default function SendInviteModal({ onClose, isOpen }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset="slideInTop"
    >
      <ModalOverlay />
      <ModalContent backgroundColor="#000000" mx="15px">
        <ModalHeader color="#ffffff" fontSize="lg">
          Send invite
        </ModalHeader>
        <ModalCloseButton color="white" />

        <Divider />

        <ModalBody my="2rem">
          <Text color="white" fontSize="sm" mb="10px">
            Invite others to view and manage this planner
          </Text>

          <Box>
            <Input placeholder="summer2024@gmail.com" />
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button
            fontSize="sm"
            height="fit-content"
            py="5px"
            boxShadow="lg"
            bg="brand.secondary"
            color="white"
            _hover={{ bg: "brand.secondary" }}
          >
            Send invite
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
