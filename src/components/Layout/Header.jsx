import { Box, Text, Avatar } from "@chakra-ui/react";

export default function Header({
  title = "Hi, Sonia! 👋",
  subText = "Welcome back and explore the world",
}) {
  return (
    <Box
      height="100px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={{ base: "1rem", md: "2rem", lg: "3rem", xl: "4rem" }}
    >
      <Box>
        <Text fontSize="2xl" fontWeight="700">
          {title}
        </Text>
        <Text fontSize="sm" fontWeight="medium">
          {subText}
        </Text>
      </Box>
      <Box>
        <Avatar src={`https://robohash.org/uksjcjs`} bg="#25330F" size="lg" />
      </Box>
    </Box>
  );
}
