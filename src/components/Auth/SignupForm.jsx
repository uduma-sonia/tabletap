import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { useViewportHeight } from "../../hooks/useViewport";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../lib/router/routePaths";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaArrowRightLong } from "react-icons/fa6";
import TableTapName from "../Common/TableTapName";

export default function SignupForm() {
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
            Create account
          </Text>
          <Text fontSize="xs" fontWeight="medium" textAlign="center">
            Enter your details and proceed
          </Text>

          <Box marginTop="3rem">
            <Box display="grid" gridTemplateColumns="1fr 1fr" gap="16px">
              <FormControl>
                <FormLabel fontWeight="600" fontSize="sm">
                  First Name
                </FormLabel>
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel fontWeight="600" fontSize="sm">
                  Last Name
                </FormLabel>
                <Input />
              </FormControl>
            </Box>

            <FormControl my="1rem">
              <FormLabel fontWeight="600" fontSize="sm">
                Phone Number
              </FormLabel>

              <PhoneInput
                country={"ng"}
                inputStyle={{
                  width: "100%",
                  height: "45px",
                  border: "1.4px solid #000000",
                  background: "#ffffff",
                  color: "#222222",
                  borderRadius: "10px",
                  padding: "0px 60px",
                }}
                inputClass="phoneDisabled"
                containerClass="slide-up"
                buttonStyle={{
                  border: "1.4px solid #000000",
                  background: "#ffffff",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  width: "50px",
                }}
                buttonClass="phoneDisabled"
                // value={phoneNumber}
                // onChange={(phone) => setPhoneNumber(phone)}
              />
            </FormControl>
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

            <Box display="flex" justifyContent="space-between" my="20px">
              <Checkbox colorScheme="green">
                <Text fontSize="xs">
                  I agree to the Terms of Service and Privacy Policy
                </Text>
              </Checkbox>
            </Box>

            <Box>
              <a href="/create-company-account">
                <Button backgroundColor="#000000" width="100%">
                  Submit
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
                  Already have an account?
                </Text>
                <Link to={RoutePaths.LOGIN}>
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    display="flex"
                    alignItems="center"
                    gap="10px"
                    color="brand.primary"
                  >
                    Login here <FaArrowRightLong size="1.2rem" />
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
