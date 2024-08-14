import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Image,
} from "@chakra-ui/react";
import { useViewportHeight } from "../../hooks/useViewport";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const height = useViewportHeight();

  return (
    <Box
      backgroundColor="white"
      height={height}
      display="flex"
      alignItems="stretch"
      padding="20px"
    >
      <Box
        width={{ base: "100%", lg: "50%" }}
        height="100%"
        bg="transparent"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box maxWidth="500px">
          <Text fontWeight="700" fontSize="4xl" textAlign="center">
            Welcome Back!
          </Text>
          <Text fontSize="sm" fontWeight="medium" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </Text>

          <Box marginTop="3rem">
            <FormControl>
              <FormLabel fontWeight="600">Username</FormLabel>
              <Input
                placeholder="trippy"
                borderRadius="20px"
                borderColor="black"
                color="black"
              />
            </FormControl>
            <FormControl mt="1.5rem">
              <FormLabel fontWeight="600">Password</FormLabel>
              <Input
                type="password"
                placeholder="********"
                borderRadius="20px"
                borderColor="black"
                color="black"
              />
            </FormControl>

            <Box
              display="flex"
              justifyContent="space-between"
              mt="20px"
              mb="40px"
            >
              <Link>
                <Text fontSize="sm" fontWeight="semibold">
                  Create account
                </Text>
              </Link>
              <Link>
                <Text fontSize="sm" fontWeight="semibold">
                  Forgot password?
                </Text>
              </Link>
            </Box>

            <Button
              backgroundColor="#000000"
              width="100%"
              borderRadius="20px"
              height="45px"
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        width={{ base: "100%", lg: "50%" }}
        height="100%"
        bg="#B3B79240"
        borderRadius="20px"
      >
        <Box
          height="80%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          <div>
            <Image
              src="/images/undraw_travelers_1.svg"
              width="auto"
              maxWidth="400px"
            />
          </div>
          <Box position="absolute" bottom="4rem" right="4rem">
            <Image
              src="/images/undraw_aircraft.svg"
              width="auto"
              maxWidth="200px"
            />
          </Box>
          <Box position="absolute" top="5rem" left="4rem">
            <Image
              src="/images/undraw_cabin.svg"
              width="auto"
              maxWidth="100px"
            />
          </Box>
        </Box>

        <Box padding="30px" height="20%">
          <Text
            fontWeight="semibold"
            textAlign="center"
            maxWidth="700px"
            mx="auto"
            fontSize="xl"
          >
            Plan your journey, live your adventure. Discover, organize, and
            explore with ease—your next adventure starts here
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
