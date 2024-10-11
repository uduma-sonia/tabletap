import {
  Box,
  Image,
  Text,
  Tag,
  IconButton,
  Stack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { MdModeEdit } from "react-icons/md";

export default function MenuItemCard() {
  const ingredients = ["salt", "pepper", "butter", "garlic"];
  const variants = ["large", "medium", "small"];
  const dietaryOptions = ["vegan", "gluten-free"];

  return (
    <Box
      borderRadius="20px"
      padding="1rem"
      bg="white"
      width="100%"
      border="1px solid"
      borderColor="brand.gray"
      position="relative"
    >
      <Box
        position="absolute"
        right="10px"
        top="10px"
        display="flex"
        alignItems="center"
        gap="1rem"
      >
        <RadioGroup defaultValue="2">
          <Stack spacing={5} direction="row">
            <Radio colorScheme="red" value="1">
              <Text fontSize="sm" fontWeight="medium">
                Not available
              </Text>
            </Radio>
            <Radio colorScheme="green" value="2">
              <Text fontSize="sm" fontWeight="medium">
                Available
              </Text>
            </Radio>
          </Stack>
        </RadioGroup>

        <IconButton
          variant="unstyled"
          display="flex"
          borderRadius="full"
          icon={<MdModeEdit size="1.5rem" />}
          _hover={{ bg: "gray.300" }}
        />
      </Box>

      <Box height="70px" display="flex" alignItems="center" gap="1rem">
        <Box width="70px" height="100%">
          <Image
            src="/images/menu_placeholder.jpeg"
            height="100%"
            width="100%"
            borderRadius="10px"
            objectFit="cover"
          />
        </Box>

        <Text fontWeight="semibold">Item name</Text>
      </Box>

      <Box mt="10px">
        <Text fontSize="lg" fontWeight="medium">
          $100.00
        </Text>

        <Text fontSize="sm" fontWeight="medium">
          {ingredients.join(" | ")}
        </Text>

        <Text fontSize="sm" mb="6px">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
        </Text>

        <Box display="flex" alignItems="center" gap="10px">
          {dietaryOptions?.map((item) => (
            <Tag bg="gray.300" key={item}>
              {item}
            </Tag>
          ))}
        </Box>

        <Text fontWeight="medium" mt="10px">
          Variants:
        </Text>
        <Box fontSize="sm" display="flex" alignItems="center" gap="10px">
          <Text>{variants.join(" | ")}</Text>
        </Box>
      </Box>
    </Box>
  );
}
