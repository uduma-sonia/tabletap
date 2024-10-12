import {
  Menu,
  Box,
  Button,
  IconButton,
  Text,
  MenuButton,
  // MenuItem,
  MenuList,
  Avatar,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import DefaultHeadSEO from "../SEO";
// import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";

export default function DefaultHeader({ openSideBar }) {
  const router = useLocation();
  const pathname = router.pathname;
  const checkWordInString = (word, str) => {
    return str.includes(word);
  };
  const isDashboard = checkWordInString("dashboard", pathname)
    ? "Overview"
    : "";
  const isMenu = checkWordInString("menu", pathname) ? "Menu" : "";
  const isOrder = checkWordInString("order", pathname) ? "Orders" : "";
  const isEmployee = checkWordInString("employee", pathname) ? "Employees" : "";
  const isCode = checkWordInString("code", pathname) ? "QR Code" : "";
  const isSettings = checkWordInString("settings", pathname) ? "Settings" : "";

  const pageLabel =
    isDashboard || isMenu || isOrder || isEmployee || isCode || isSettings;

  return (
    <Box
      height="100px"
      display="flex"
      alignItems="center"
      position="relative"
      zIndex={9}
      borderBottom="1px solid"
      borderBottomColor="brand.gray"
      shadow="sm"
      gap="10px"
      px={{ base: "1rem", lg: "2rem" }}
    >
      <DefaultHeadSEO />

      <Box
        display="flex"
        width="100%"
        alignItems="center"
        height="100%"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" gap="10px">
          <IconButton
            variant="unstyled"
            display={{ base: "flex", md: "none" }}
            bg="#031c03"
            color="white"
            boxSize="35px"
            onClick={openSideBar}
            icon={<GiHamburgerMenu size="1.3rem" />}
          />
          <Text fontWeight="semibold" fontSize={{ base: "lg", md: "xl" }}>
            {pageLabel}
          </Text>
        </Box>

        <Box>
          <Menu>
            <MenuButton
              as={Box}
              cursor="pointer"
              // _hover={{ bg: "#228B2230" }}
              borderRadius="30px"
              py="6px"
            >
              <Button
                variant="unstyled"
                display="flex"
                alignItems="center"
                px="16px"
                gap="10px"
                borderRadius="30px"
                rightIcon={<BiChevronDown size="1.4rem" />}
              >
                <Box>
                  <Avatar
                    size="sm"
                    name="sonia uduma"
                    bg="#228B2230"
                    color="#228B22"
                    fontWeight="semibold"
                  />
                </Box>

                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  justifyContent="center"
                >
                  <Text fontSize={{ base: "sm", md: "md" }}>Sweet Bistro</Text>
                  <Text
                    fontSize="sm"
                    lineHeight="12px"
                    color="#717579"
                    fontWeight="normal"
                  >
                    Sonia Uduma
                  </Text>
                </Box>
              </Button>
            </MenuButton>

            <MenuList
              border="1px solid #D7D7D7"
              borderRadius="23px"
              boxShadow="lg"
              py="30px"
              width="200px"
              fontWeight="normal"
              bg="white"
              maxH="350px"
              overflow="auto"
            >
              {/* <Link>
                <MenuItem
                  fontSize={{ base: "xs", md: "sm" }}
                  gap="10px"
                  display="flex"
                  height="50px"
                  borderRadius="7px"
                  _hover={{ bg: "gray.200" }}
                  color="#00a15d"
                  fontWeight="medium"
                >
                  Add another company
                </MenuItem>
              </Link>
              <Link>
                <MenuItem
                  fontSize={{ base: "xs", md: "sm" }}
                  gap="10px"
                  display="flex"
                  height="50px"
                  borderRadius="7px"
                  _hover={{ bg: "gray.200" }}
                  color="#00a15d"
                  fontWeight="medium"
                >
                  Add another company
                </MenuItem>
              </Link> */}
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
}
