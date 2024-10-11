import { Box, Image, Text } from "@chakra-ui/react";

export default function QRCodeCard() {
  return (
    <Box
      height="350px"
      border="1px solid black"
      borderRadius="16px"
      overflow="hidden"
    >
      <Box height="250px" borderRadius="16px">
        <Image
          src="/images/qrcode_placeholder.jpeg"
          height="100%"
          width="100%"
          borderRadius="10px"
          objectFit="cover"
        />
      </Box>

      <Box
        padding="10px"
        bg="gray.200"
        height="100px"
        borderBottomRadius="16px"
      >
        <Text>11</Text>

        <Text fontSize="sm" fontWeight="semibold">
          Active
        </Text>

        <Text fontWeight="semibold">Assigned to: Employee name</Text>
      </Box>
    </Box>
  );
}
