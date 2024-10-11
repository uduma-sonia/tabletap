import { Box, IconButton, Text } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router-dom";

export default function DefaultHeader({ openSideBar }) {
  const router = useLocation();
  const pathname = router.pathname;
  const checkWordInString = (word, str) => {
    return str.includes(word);
  };
  const isMenu = checkWordInString("menu", pathname) ? "Menu" : "";
  const isOrder = checkWordInString("order", pathname) ? "Orders" : "";
  const isEmployee = checkWordInString("employee", pathname) ? "Employees" : "";
  const isCode = checkWordInString("code", pathname) ? "QR Code" : "";

  return (
    <Box
      display="flex"
      alignItems="center"
      height="100px"
      position="relative"
      zIndex={9}
      borderBottom="1px solid"
      borderBottomColor="brand.gray"
      shadow="sm"
      gap="10px"
      px={{ base: "1rem", lg: "2rem" }}
    >
      <IconButton
        variant="unstyled"
        display={{ base: "flex", md: "none" }}
        bg="#031c03"
        color="white"
        boxSize="35px"
        onClick={openSideBar}
        icon={<GiHamburgerMenu size="1.3rem" />}
      />
      <Box>
        <Text fontWeight="semibold" fontSize={{ base: "lg", md: "xl" }}>
          {isMenu || isOrder || isEmployee || isCode || "Welcome Admin"}
        </Text>
      </Box>
    </Box>
  );
}
