import {
  Box,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useViewportHeight } from "../../hooks/useViewport";
import DefaultHeader from "./DefaultHeader";
import DefaultSidebar from "./DefaultSidebar";

export default function DashboardLayout({ children }) {
  const height = useViewportHeight();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      display="flex"
      bg="#f5f7f5"
      mx="auto"
      justifyContent="flex-start"
      minH={height}
    >
      <Box
        bg="#031c03"
        width="230px"
        minWidth="230px"
        display={{ base: "none", md: "block" }}
      >
        <DefaultSidebar />
      </Box>

      <Box flex="1 1 0px">
        <DefaultHeader openSideBar={onOpen} />
        <Box
          maxHeight="calc(100vh - 100px)"
          overflowY="auto"
          overflowX="hidden"
        >
          {children}
        </Box>
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#031c03">
          <DrawerCloseButton color="white" />
          <DefaultSidebar />
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
