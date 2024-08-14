import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function CheckList() {
  return (
    <Box backgroundColor="white" borderRadius="16px">
      <Text
        borderBottom="1px solid"
        borderBottomColor="gray.300"
        py="15px"
        px="10px"
        fontWeight="600"
        fontSize="lg"
      >
        CheckList
      </Text>

      <Box>
        <Accordion allowToggle>
          <AccordionItem borderBottom="none">
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontSize="base"
                fontWeight="600"
              >
                Places to eat
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem borderBottom="none">
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontSize="base"
                fontWeight="600"
              >
                Places to eat
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
}
