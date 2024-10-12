import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import { useViewportHeight } from "../../hooks/useViewport";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../lib/router/routePaths";
import { restaurantTypes } from "../../lib/data/restaurantTypes";
import { countries } from "../../lib/data/countries";
import { FaArrowRightLong } from "react-icons/fa6";
import TableTapName from "../Common/TableTapName";

export default function CreateCompanyAccountForm() {
  const height = useViewportHeight();

  return (
    <Box
      backgroundColor="white"
      height={height}
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Box position="absolute" top="16px" left="1.5rem">
        <a href="/">
          <TableTapName color="#000000" />
        </a>
      </Box>

      <Box
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        px="10px"
      >
        <Box
          maxWidth="500px"
          width="100%"
          border="1px solid"
          borderColor="gray.100"
          padding="24px"
          borderRadius="10px"
          boxShadow="lg"
        >
          <Text fontWeight="700" fontSize="xl" textAlign="center">
            Create Restaurant
          </Text>

          <Box marginTop="2rem">
            <FormControl>
              <FormLabel fontWeight="600" fontSize="sm">
                Restaurant name
              </FormLabel>
              <Input />
            </FormControl>

            <FormControl my="1.5rem">
              <FormLabel fontWeight="600" fontSize="sm">
                Type
              </FormLabel>
              <Select>
                {restaurantTypes?.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl my="1.5rem">
              <FormLabel fontWeight="600" fontSize="sm">
                Country
              </FormLabel>
              <Select>
                {countries.map((item) => {
                  return (
                    <option value={item.name} key={item.name}>
                      {item.name}
                    </option>
                  );
                })}
              </Select>
            </FormControl>

            <Box mt="2rem">
              <a href="/dashboard">
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
