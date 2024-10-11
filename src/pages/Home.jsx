import { Box, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDir="column"
      justifyContent="center"
      height="100vh"
      fontSize="3xl"
    >
      <div>Restaurant Management App</div>

      <a href="/login">
        <Button>Get started</Button>
      </a>
    </Box>
  );
}
