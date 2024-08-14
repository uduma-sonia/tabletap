/* eslint-disable react/prop-types */
import {
  Box,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { PiTrashBold } from "react-icons/pi";
import { IoMdMore } from "react-icons/io";
import { BiPoll } from "react-icons/bi";
import { BsCardChecklist } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";

export default function TripActions({ onOpen }) {
  return (
    <Menu placement="bottom-end">
      <MenuButton as={Box} cursor="pointer" _hover={{ opacity: "0.8" }}>
        <Button>
          <IoMdMore />
        </Button>
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
          <FiUserPlus /> <Text as="span"> Invite members</Text>
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
          <BiPoll /> <Text as="span"> Create poll </Text>
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
          <BsCardChecklist /> <Text as="span"> Add checklist </Text>
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
          <PiTrashBold /> <Text as="span"> Delete trip </Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
