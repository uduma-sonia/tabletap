import { Box, Button, useDisclosure } from "@chakra-ui/react";
import QRCodeCard from "./QRCodeCard";
import GenerateCodeModal from "../Modals/GenerateCodeModal";
import SearchBar from "../Common/SearchBar";
import { AiOutlinePlus } from "react-icons/ai";

export default function QRCodesView() {
  const { onToggle, isOpen } = useDisclosure();

  return (
    <Box>
      <Box
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={{ lg: "center" }}
        justifyContent="space-between"
        gap="10px"
      >
        <Box>
          <Button
            height="40px"
            rightIcon={<AiOutlinePlus />}
            bg="brand.dark"
            onClick={onToggle}
          >
            Generate code
          </Button>
        </Box>

        <Box>
          <SearchBar placeholder="Search code name" />
        </Box>
      </Box>

      <Box
        display="fkex"
        flexWrap="wrap"
        gap={{ base: "1rem", lg: "1.6rem" }}
        mt="1.5rem"
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
