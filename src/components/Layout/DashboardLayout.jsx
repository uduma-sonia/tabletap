import { Box } from "@chakra-ui/react";
import { useViewportHeight } from "../../hooks/useViewport";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  const height = useViewportHeight();

  return (
    <Box
      backgroundColor="#FFFFFF"
      minHeight="100vh"
      display="flex"
      alignItems="top"
    >
      <Box
        width="250px"
        height={height}
        display={{ base: "none", lg: "block" }}
      >
        <Sidebar />
      </Box>
      <Box
        maxHeight={height}
        borderRadius={{ lg: "30px" }}
        flex="1 1 0px"
        overflowY="auto"
        bg="#eff0ed"
      >
        {children}
      </Box>
    </Box>
  );
}
