import { Box, Button, useDisclosure } from "@chakra-ui/react";
import QRCodeCard from "./QRCodeCard";
import GenerateCodeModal from "../Modals/GenerateCodeModal";

export default function QRCodesView() {
  const { onToggle, isOpen } = useDisclosure();

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Button height="40px" onClick={onToggle}>
            Generate code
          </Button>
        </Box>
      </Box>

      <Box
        mt="2rem"
        display="grid"
        gridTemplateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap="18px"
      >
        <QRCodeCard />
        <QRCodeCard />
        <QRCodeCard />
        <QRCodeCard />
      </Box>

      <GenerateCodeModal isOpen={isOpen} onClose={onToggle} />
    </Box>
  );
}
