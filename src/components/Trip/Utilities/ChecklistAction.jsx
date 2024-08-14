import {
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { PiTrashBold, PiPlus } from "react-icons/pi";
import { PiDotsNineBold } from "react-icons/pi";

export default function ChecklistActions({ onOpen }) {
  return (
    <Menu placement="bottom-start">
      <MenuButton as={Box} cursor="pointer">
        <IconButton
          aria-label=""
          icon={<PiDotsNineBold color="white" size="1.2rem" />}
          variant="ghost"
          boxSize="30px"
          border="none"
          minW={0}
          _hover={{ transform: "scale(1.2)", opacity: 1 }}
          opacity={0.9}
        />
      </MenuButton>

      <MenuList
        bg="#000000"
        padding="10px"
        border="none"
        borderRadius="10px"
        boxShadow="xl"
      >
        <MenuItem
          height="35px"
          bg="transparent"
          color="#c0c0c0"
          borderRadius="8px"
          fontSize="sm"
          fontWeight="700"
          _hover={{ bg: "brand.secondary" }}
          onClick={onOpen}
          gap="6px"
          px="6px"
        >
          <PiPlus /> <Text as="span"> Add item</Text>
        </MenuItem>

        <MenuItem
          height="35px"
          bg="transparent"
          color="#c0c0c0"
          borderRadius="8px"
          fontSize="sm"
          fontWeight="700"
          _hover={{ bg: "brand.secondary" }}
          gap="6px"
          px="6px"
        >
          <PiTrashBold /> <Text as="span"> Delete List </Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
