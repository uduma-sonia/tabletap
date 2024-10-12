import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Checkbox,
  Text,
  FormLabel,
  Input,
  Tag,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

export default function MenuSettingsModal({ onClose, isOpen }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
      <ModalOverlay />

      <ModalContent borderRadius="16px">
        <ModalHeader
          fontSize="md"
          bg="#031c03"
          color="white"
          borderTopRadius="16px"
          fontWeight="semibold"
        >
          Menu settings
        </ModalHeader>
        <ModalCloseButton color="white" />

        <ModalBody p="0">
          <Tabs>
            <TabList>
              <Tab py="10px" _selected={{ borderColor: "brand.primary" }}>
                General
              </Tab>
              <Tab py="10px" _selected={{ borderColor: "brand.primary" }}>
                Variants
              </Tab>
              <Tab py="10px" _selected={{ borderColor: "brand.primary" }}>
                Dietary options
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <FormControl>
                  <Checkbox colorScheme="green">
                    <Text fontSize="sm" fontWeight="semibold">
                      Show menu on website
                    </Text>
                  </Checkbox>
                </FormControl>

                <FormControl my="1rem">
                  <Checkbox colorScheme="green">
                    <Text fontSize="sm" fontWeight="semibold">
                      Display Ingredients{" "}
                      <Text as="span" fontWeight="normal">
                        (display your ingredients to customers)
                      </Text>
                    </Text>
                  </Checkbox>
                </FormControl>
              </TabPanel>

              <TabPanel>
                <FormControl>
                  <FormLabel fontWeight="600" fontSize="sm">
                    Eg. (Large, medium, small)
                  </FormLabel>
                  <Box mt="20px" mb="10px">
                    <Tag>Small</Tag>
                  </Box>
                  <Input placeholder="Type and enter" />
                </FormControl>
              </TabPanel>

              <TabPanel>
                <FormControl>
                  <FormLabel fontWeight="600" fontSize="sm">
                    Eg. (Large, medium, small)
                  </FormLabel>
                  <Box mt="20px" mb="10px">
                    <Tag>Small</Tag>
                  </Box>
                  <Input placeholder="Type and enter" />
                </FormControl>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>

        <ModalFooter mt="2rem">
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button height="40px">Save settings</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
