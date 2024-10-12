import { Box, useDisclosure, Button, Text } from "@chakra-ui/react";
import MenuCard from "./MenuCard";
import { AiOutlinePlus } from "react-icons/ai";
import CreateMenuCategoryModal from "../Modals/CreateMenuCategoryModal";
import SearchBar from "../Common/SearchBar";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { BsCopy } from "react-icons/bs";
import { RiSettings5Line } from "react-icons/ri";
import MenuSettingsModal from "../Modals/MenuSettingsModal";

export default function MenuView() {
  const { onToggle, isOpen } = useDisclosure();
  const { onToggle: onToggleMenuSettings, isOpen: isOpenMenuSettings } =
    useDisclosure();

  return (
    <Box>
      <Box
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={{ lg: "center" }}
        justifyContent="space-between"
        gap="10px"
      >
        <Box>
          <Button
            height="40px"
            rightIcon={<AiOutlinePlus />}
            bg="brand.dark"
            onClick={onToggle}
          >
            Add Category
          </Button>
        </Box>

        <Box>
          <SearchBar placeholder="Search menu" />
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        gap="10px"
        my="1.5rem"
      >
        <Link>
          <Text
            fontSize="xs"
            textDecor="underline"
            color="blue.700"
            display="flex"
            alignItems="center"
            gap="6px"
            fontWeight="600"
          >
            Menu page
            <FiExternalLink />
          </Text>
        </Link>

        <Link>
          <Text
            fontSize="xs"
            textDecor="underline"
            color="blue.700"
            display="flex"
            alignItems="center"
            gap="6px"
            fontWeight="600"
          >
            Copy menu link
            <BsCopy />
          </Text>
        </Link>

        <button onClick={onToggleMenuSettings}>
          <Text
            fontSize="xs"
            textDecor="underline"
            color="blue.700"
            display="flex"
            alignItems="center"
            gap="6px"
            fontWeight="600"
          >
            Menu settings
            <RiSettings5Line size="14px" />
          </Text>
        </button>
      </Box>

      <Box display="fkex" flexWrap="wrap" gap={{ base: "1rem", lg: "1.6rem" }}>
        <MenuCard route={`/menu/dessert`} name="Dessert" />
        <MenuCard route={`/menu/dessert`} name="Lunch" />
        <MenuCard route={`/menu/dessert`} name="Breakfast" />
        <MenuCard route={`/menu/dessert`} name="Appetizer" />
        <MenuCard route={`/menu/dessert`} name="Dessert" />
        <MenuCard route={`/menu/dessert`} name="Lunch" />
        <MenuCard route={`/menu/dessert`} name="Breakfast" />
        <MenuCard route={`/menu/dessert`} name="Appetizer" />
      </Box>

      {isOpen && <CreateMenuCategoryModal isOpen={isOpen} onClose={onToggle} />}
      {isOpenMenuSettings && (
        <MenuSettingsModal
          isOpen={isOpenMenuSettings}
          onClose={onToggleMenuSettings}
        />
      )}
    </Box>
  );
}
