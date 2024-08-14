import { Box } from "@chakra-ui/react";
import HomeView from "../components/Home/HomeView";

export default function Home() {
  return (
    <Box
      minHeight="100vh"
      bg="brand.background"
      paddingX={{ base: "5px", lg: "10px" }}
    >
      <Box minHeight="100vh" pt={{ lg: "20px" }}>
        <HomeView />
      </Box>
    </Box>
  );
}
