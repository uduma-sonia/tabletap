/* eslint-disable react/prop-types */
import {
  Box,
  Avatar,
  Center,
  Stack,
  Input,
  FormLabel,
  Radio,
  RadioGroup,
  Text,
  Divider,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function SettingSidePanel() {
  const [fontValue, setFontValue] = useState("Manrope Variable");
  const [currency, setCurrency] = useState("USD");
  const [view, setView] = useState("1");

  const generateRandomAvatar = (length) => {
    return Math.random().toString(16).substring(2, length);
  };
  const randomNumber = generateRandomAvatar(8);

  useEffect(() => {
    if (localStorage.getItem("custom-app-font") !== null) {
      setFontValue(localStorage.getItem("custom-app-font"));
    }
    if (localStorage.getItem("app-currency") !== null) {
      setCurrency(localStorage.getItem("app-currency"));
    }

    if (localStorage.getItem("grid-view") !== null) {
      setView(localStorage.getItem("grid-view"));
    }
  }, [fontValue, currency, view]);

  return (
    <Box color="#FEFAE0">
      <Center pt="40px">
        <Avatar
          src={`https://robohash.org/${randomNumber}`}
          border="1px solid #FEFAE0"
          size="lg"
          padding="0px"
        />
      </Center>

      <Box bg="brand.secondary" my="1rem" borderRadius="10px" p="10px">
        <FormLabel fontSize="xs" mb="0px" color="#c0c0c0">
          Name/Username
        </FormLabel>
        <Input height="fit-content" py="0px" border="none" px="0px" />
      </Box>

      <Box bg="brand.secondary" borderRadius="10px" p="10px">
        <FormLabel fontSize="xs" mb="0px" color="#c0c0c0">
          Email
        </FormLabel>
        <Input height="fit-content" py="0px" border="none" px="0px" />
      </Box>

      <Divider borderColor="gray.700" my="1rem" />

      <Box>
        <FormLabel fontSize="xs" mb="0px" color="#c0c0c0">
          Invites
        </FormLabel>

        <Text fontSize="sm" fontWeight="600">
          You have no invites
        </Text>
      </Box>

      <Divider borderColor="gray.700" my="1rem" />

      <Box>
        <FormLabel fontSize="xs" mb="0px" color="#c0c0c0">
          Currency
        </FormLabel>

        <RadioGroup
          colorScheme="green"
          mt="10px"
          value={currency}
          onChange={(e) => {
            setCurrency(e);
            localStorage.setItem("app-currency", e);
            window.location.reload();
          }}
        >
          <Stack spacing={0} gap={3} direction="row">
            <Radio value="USD" borderColor="brand.light">
              <Text fontSize="sm">USD</Text>
            </Radio>
            <Radio value="NGN" borderColor="brand.light">
              <Text fontSize="sm">NGN</Text>
            </Radio>
            <Radio value="GBP" borderColor="brand.light">
              <Text fontSize="sm">GBP</Text>
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>

      <Divider borderColor="gray.700" my="1rem" />

      <Box>
        <FormLabel fontSize="xs" mb="0px" color="#c0c0c0">
          Font
        </FormLabel>

        <RadioGroup
          value={fontValue}
          onChange={(e) => {
            setFontValue(e);
            localStorage.setItem("custom-app-font", e);
            window.location.reload();
          }}
          colorScheme="green"
          mt="10px"
        >
          <Stack spacing={0} gap={3} direction="row">
            <Radio value="Manrope Variable" borderColor="brand.light">
              <Text fontSize="sm" fontFamily="Manrope Variable">
                Default
              </Text>
            </Radio>
            <Radio value="Kalam" borderColor="brand.light">
              <Text fontSize="sm" fontFamily="kalam">
                Handwriting
              </Text>
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>

      <Divider borderColor="gray.700" my="1rem" />

      <Box>
        <FormLabel fontSize="xs" mb="0px" color="#c0c0c0">
          App Color
        </FormLabel>

        <Box mt="10px" display="flex" flexWrap="wrap" gap="10px">
          <ColorTag
            title={"Aloe Green"}
            background="green.main"
            variant="default"
          />
          <ColorTag
            title={"Pale carmine"}
            background="pink.main"
            variant="pink"
          />
          <ColorTag
            title={"Dark Purple"}
            background="purple.main"
            variant="purple"
          />
          <ColorTag title={"Teal Blue"} background="blue.main" variant="blue" />
          {/* <ColorTag title={"Black"} background="black.main" variant="black" /> */}
        </Box>
      </Box>

      <Divider borderColor="gray.700" my="1rem" />

      <Box>
        <FormLabel fontSize="xs" mb="0px" color="#c0c0c0">
          Board View
        </FormLabel>

        <Box mt="10px" display="flex" gap="10px">
          <Button
            variant="unstyled"
            border={view === "1" ? "1px solid" : "none"}
            borderColor={view === "1" ? "brand.secondary" : "transparent"}
            height="100px"
            width="50%"
            display="grid"
            gridTemplateColumns="1fr"
            gap="5px"
            padding="5px"
            onClick={(e) => {
              setCurrency(e);
              localStorage.setItem("grid-view", "1");
              window.location.reload();
            }}
          >
            <Box bg="brand.secondary" height="100%" />
            <Box bg="brand.secondary" height="100%" />
          </Button>

          <Button
            variant="unstyled"
            border={view === "2" ? "1px solid" : "none"}
            borderColor={view === "2" ? "brand.secondary" : "transparent"}
            height="100px"
            width="50%"
            display="grid"
            gridTemplateColumns="1fr 1fr"
            gap="5px"
            padding="5px"
            onClick={(e) => {
              setCurrency(e);
              localStorage.setItem("grid-view", "2");
              window.location.reload();
            }}
          >
            <Box bg="brand.secondary" height="100%" />
            <Box bg="brand.secondary" height="100%" />
            <Box bg="brand.secondary" height="100%" />
            <Box bg="brand.secondary" height="100%" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const ColorTag = ({ title, background, variant }) => {
  return (
    <Tooltip label={title} bg={background} fontSize="xs" fontWeight="medium">
      <Button
        height="30px"
        minWidth="30px"
        bg={background}
        borderRadius="5px"
        _hover={{ bg: background }}
        onClick={() => {
          localStorage.setItem("custom-app-theme", variant);
          window.location.reload();
        }}
      />
    </Tooltip>
  );
};
