import {
  Box,
  Input,
  FormControl,
  Image,
  Textarea,
  Text,
  Button,
} from "@chakra-ui/react";

export default function CreateItemCard() {
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

        <FormControl>
          <Input placeholder="Name" />
        </FormControl>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns={{ lg: "1fr 1fr" }}
        mt="10px"
        gap="10px"
      >
        <FormControl>
          <Textarea
            borderColor="black"
            borderRadius="10px"
            fontWeight="600"
            color="#222222"
            fontSize="sm"
            _hover={{ border: "1px solid black" }}
            _focus={{ border: "none" }}
            _active={{ border: "none", outline: "none" }}
            outline="none"
            focusBorderColor="none"
            resize="none"
            rows={3}
            placeholder="Description"
          />
        </FormControl>

        <Box>
          <Box display="flex" alignItems="center" gap="6px">
            <Text fontSize="lg" fontWeight="semibold">
              $
            </Text>
            <FormControl>
              <Input placeholder="Price" width="150px" type="number" />
            </FormControl>
          </Box>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns={{ md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
        mt="1rem"
        gap="30px"
      >
        <Box>
          <Text fontWeight="semibold">Ingredients</Text>

          <Box mt="6px">
            <FormControl
              maxWidth="300px"
              display="flex"
              alignItems="center"
              gap="6px"
            >
              <Text>1.</Text>

              <Input placeholder="Chicken" />
            </FormControl>
          </Box>
        </Box>

        <Box>
          <Text fontWeight="semibold">Dietary options</Text>

          <Box mt="6px">
            <FormControl
              maxWidth="300px"
              display="flex"
              alignItems="center"
              gap="6px"
            >
              <Text>1.</Text>

              <Input placeholder="Vegan" />
            </FormControl>
          </Box>
        </Box>

        <Box>
          <Text fontWeight="semibold">Variants</Text>

          <Box mt="6px">
            <FormControl
              maxWidth="300px"
              display="flex"
              alignItems="center"
              gap="6px"
            >
              <Text>1.</Text>

              <Input placeholder="Large" />
            </FormControl>
          </Box>
        </Box>
      </Box>

      <Box mt="3rem" display="flex" justifyContent="flex-end">
        <Button height="40px">Create</Button>
      </Box>
    </Box>
  );
}
