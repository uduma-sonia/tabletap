import { Box, useDisclosure } from "@chakra-ui/react";
import MenuCard from "./MenuCard";
import { FaCirclePlus } from "react-icons/fa6";
import CreateMenuCategoryModal from "../Modals/CreateMenuCategoryModal";

export default function MenuView() {
  const { onToggle, isOpen } = useDisclosure();

  return (
    <Box>
      <Box
        display="grid"
        gridTemplateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={{ base: "1rem", lg: "1.6rem" }}
      >
        <MenuCard route={`/menu/dessert`} />
        <MenuCard route={`/menu/lunch`} />
        <MenuCard route={`/menu/dinner`} />

        <button onClick={onToggle}>
          <Box
            border="1px solid"
            borderColor="brand.gray"
            borderRadius="16px"
            height="150px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <FaCirclePlus size="2rem" color="#228B22" />
          </Box>
        </button>
      </Box>

      <CreateMenuCategoryModal isOpen={isOpen} onClose={onToggle} />
    </Box>
  );
}
