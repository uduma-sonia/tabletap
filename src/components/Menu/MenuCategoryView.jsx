import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";
import MenuItemCard from "./MenuItemCard";
import CreateItemCard from "./CreateItemCard";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function MenuCategoryView() {
  const { category } = useParams();
  const { onToggle, isOpen } = useDisclosure();

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Link to={"/menu"}>
            <Box
              display="flex"
              alignItems="center"
              gap="10px"
              fontSize="lg"
              fontWeight="medium"
            >
              <FaArrowLeftLong size="1.3rem" />
              {category}
            </Box>
          </Link>
        </Box>

        <Box>
          <Button height="40px" onClick={onToggle}>
            Add item
          </Button>
        </Box>
      </Box>

      <Box mt="2rem" display="flex" flexDir="column" gap="10px">
        <MenuItemCard />

        {isOpen && <CreateItemCard />}
      </Box>
    </Box>
  );
}
