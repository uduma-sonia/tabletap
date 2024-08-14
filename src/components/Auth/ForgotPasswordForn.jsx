import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { useViewportHeight } from "../../hooks/useViewport";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function ForgotPasswordForm() {
  const height = useViewportHeight();
  const navigate = useNavigate();

  return (
    <Box
      backgroundColor="white"
      height={height}
      // display="flex"
      // alignItems="stretch"
      padding="20px"
    >
      <Box
        height="100%"
        bg="transparent"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box maxWidth="500px">
          <IconButton
            aria-label=""
            icon={<FaArrowLeft />}
            variant="outline"
            border="1px solid black"
            onClick={() => navigate(-1)}
          />

          <Text fontWeight="700" fontSize="4xl" textAlign="center">
            Forgot Password
          </Text>
          <Text fontSize="sm" fontWeight="medium" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </Text>

          <Box marginTop="3rem">
            <FormControl mb="3rem">
              <FormLabel fontWeight="600">Email</FormLabel>
              <Input
                type="email"
                placeholder="trippy"
                borderRadius="20px"
                borderColor="black"
                color="black"
              />
            </FormControl>

            <Button
              backgroundColor="#000000"
              width="100%"
              borderRadius="20px"
              height="45px"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
