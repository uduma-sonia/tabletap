import {
  Box,
  Heading,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import SettingSidePanel from "../Common/SettingSidePanel";
import { RiMenuUnfold4Line2 } from "react-icons/ri";
import { GoPlus } from "react-icons/go";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Heading
        color="white"
        fontFamily="Kalam"
        fontSize={{ base: "2xl", lg: "4xl" }}
      >
        Travel Planner
      </Heading>

      <Box>
        <Button
          ref={btnRef}
          onClick={onOpen}
          rightIcon={<RiMenuUnfold4Line2 size="1.2rem" />}
          px="0px"
          bg="transparent"
          color="brand.textLight"
          boxShadow="none"
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
        >
          Sonia Uduma
        </Button>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent position="relative">
          <DrawerCloseButton color="white" />
          <DrawerBody bg="black">
            <SettingSidePanel />

            <Box
              bg="black"
              width="100%"
              position="absolute"
              bottom="0px"
              left="0px"
              px="20px"
              pb="20px"
              py="15px"
              height="fit-content"
            >
              <Box display="flex" gap="20px" alignItems="center">
                <Button
                  fontSize="sm"
                  height="fit-content"
                  py="5px"
                  boxShadow="lg"
                  bg="brand.secondary"
                  color="white"
                  _hover={{ bg: "brand.secondary" }}
                  rightIcon={<GoPlus />}
                >
                  New trip
                </Button>
                <Button
                  fontSize="sm"
                  height="fit-content"
                  py="5px"
                  boxShadow="lg"
                  bg="brand.secondary"
                  color="white"
                  _hover={{ bg: "brand.secondary" }}
                >
                  History
                </Button>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
