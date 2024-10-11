import { Box, IconButton, Text } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function DefaultHeader({ openSideBar }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      height="100px"
      position="relative"
      zIndex={9}
      borderBottom="1px solid"
      borderBottomColor="#878a87"
      shadow="md"
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
          Welcome Admin
        </Text>
      </Box>
    </Box>
  );
}
{
  /* <Button
variant="unstyled"
minW={0}
display={{ base: "block", lg: "none" }}
onClick={openSideBar}
>
<GiHamburgerMenu size="1.4rem" />
</Button> */
}
