import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useViewportHeight } from "../../hooks/useViewport";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../lib/router/routePaths";
import { FaArrowRightLong } from "react-icons/fa6";
import TableTapName from "../Common/TableTapName";

export default function LoginForm() {
  const height = useViewportHeight();

  return (
    <Box
      backgroundColor="white"
      height={height}
      display="flex"
      alignItems="stretch"
    >
      <Box
        width={{ base: "100%", lg: "50%" }}
        display={{ base: "none", lg: "block" }}
        height="100%"
        backgroundImage='linear-gradient(180deg, rgba(0,0,0,0.7) 23%, rgba(34,32,30,0.7) 75%), url("/images/dining_background.jpg")'
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        position="relative"
      >
        <Box position="absolute" top="16px" left="2rem">
          <TableTapName />
        </Box>
        <Box
          height="100%"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box padding="30px" color="white">
            <Text fontWeight="900" fontSize="5xl" lineHeight="100%">
              Turn Tables Faster,
            </Text>
            <Text fontWeight="900" fontSize="5xl" lineHeight="100%">
              Serve Better.
            </Text>
            <Text mt="14px" fontWeight="700" fontSize="lg">
              Effortless Ordering, Exceptional Dining.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box
        width={{ base: "100%", lg: "50%" }}
        height="100%"
        bg="transparent"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={{ base: "1.5rem", lg: "0" }}
        position="relative"
      >
        <Box
          position="absolute"
          top="16px"
          left="1.5rem"
          display={{ base: "black", lg: "none" }}
        >
          <TableTapName color="#000000" />
        </Box>
        <Box maxWidth="500px" width="100%">
          <Text fontWeight="700" fontSize="xl" textAlign="center">
            Welcome Back
          </Text>
          <Text fontSize="xs" fontWeight="medium" textAlign="center">
            Enter your details and proceed
          </Text>

          <Box marginTop="3rem">
            <FormControl my="1.5rem">
              <FormLabel fontWeight="600" fontSize="sm">
                Email
              </FormLabel>
              <Input type="email" />
            </FormControl>

            <FormControl>
              <FormLabel fontWeight="600" fontSize="sm">
                Password
              </FormLabel>
              <Input type="password" />
            </FormControl>

            <Box mt="2rem">
              <a href="/dashboard">
                <Button backgroundColor="#000000" width="100%">
                  Login
                </Button>
              </a>
              <br />
              <br />

              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="10px"
              >
                <Text fontSize="sm" fontWeight="semibold">
                  Don&apos;t have an account?
                </Text>
                <Link to={RoutePaths.SIGNUP}>
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    display="flex"
                    alignItems="center"
                    gap="10px"
                    color="brand.primary"
                  >
                    Signup here <FaArrowRightLong size="1.2rem" />
                  </Text>
                </Link>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                mt="16px"
              >
                <Link to={RoutePaths.SIGNUP}>
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    display="flex"
                    alignItems="center"
                    gap="10px"
                    color="brand.primary"
                  >
                    Forgot password? <FaArrowRightLong size="1.2rem" />
                  </Text>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
