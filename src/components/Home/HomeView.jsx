import {
  Box,
  FormLabel,
  Input,
  Textarea,
  IconButton,
  Text,
  Checkbox,
  useDisclosure,
} from "@chakra-ui/react";
import ExpenseTable from "../Trip/ExpenseTable";
import ChecklistCard from "../Trip/ChecklistCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { BiLinkExternal } from "react-icons/bi";
import Header from "../Trip/Header";
import ExtraInformation from "../Trip/ExtraInformation";
import SendInviteModal from "../Trip/SendInviteModal";
import TripActions from "../Trip/Utilities/TripActions";

export default function HomeView() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  localStorage.getItem("grid-view");
  let selectedView = "2";

  if (localStorage.getItem("grid-view") !== null) {
    selectedView = localStorage.getItem("grid-view");
  }

  return (
    <Box maxWidth="700px" mx="auto" padding="10px">
      <SendInviteModal isOpen={isOpen} onClose={onClose} />
      <Header />

      <Box
        height="130px"
        bg="brand.secondary"
        borderRadius="10px"
        bgRepeat="no-repeat"
        bgSize="cover"
        backgroundImage='url("/images/cover_2.jpeg")'
      />

      <Box display="flex" justifyContent="space-between" my="30px">
        <Box>
          <Checkbox>
            <Text color="white" fontWeight="semibold" fontSize="sm">
              Trip started
            </Text>
          </Checkbox>
        </Box>

        <Box display="flex" gap="10px">
          <TripActions onOpen={onOpen} />
        </Box>
      </Box>

      <Box>
        <Box
          mb={{ base: "15px", lg: "30px" }}
          display="grid"
          gridTemplateColumns={{ base: "1fr", lg: "1fr 250px" }}
          gap={{ base: "15px", lg: "30px" }}
        >
          <Box>
            <FormLabel
              fontSize="xs"
              color="brand.textLight"
              fontFamily="Manrope Variable"
              mb="0px"
              fontWeight="700"
            >
              DESTINATION
            </FormLabel>
            <Input />
          </Box>
          <Box>
            <FormLabel
              fontSize="xs"
              color="brand.textLight"
              fontFamily="Manrope Variable"
              mb="0px"
              fontWeight="700"
            >
              WHEN
            </FormLabel>
            <Input bg="brand.light" fontFamily="Kalam" />
          </Box>
        </Box>

        <ResponsiveMasonry
          columnsCountBreakPoints={{
            350: 1,
            900: selectedView === "2" ? 2 : 1,
          }}
        >
          <Masonry gutter="15px">
            <Box>
              <FormLabel
                fontSize="xs"
                color="brand.textLight"
                fontFamily="Manrope Variable"
                mb="5px"
                fontWeight="700"
              >
                VACATION ADDRESS
              </FormLabel>
              <Textarea
                variant="primary"
                bg="transparent"
                resize="none"
                border="1px solid"
                fontSize="sm"
                color="white"
                borderColor="brand.light"
                borderRadius="0px"
                height="80px"
                fontWeight="600"
              />
            </Box>

            <Box>
              <FormLabel
                fontSize="xs"
                color="brand.textLight"
                fontFamily="Manrope Variable"
                mb="5px"
                fontWeight="700"
              >
                MAP LINK
              </FormLabel>

              <Box
                display="flex"
                alignItems="center"
                border="1px solid"
                borderColor="brand.light"
                borderRadius="0px"
                padding="10px"
                height="80px"
              >
                <Text color="white" fontSize="sm" fontWeight="500">
                  24 King Perekule St, New GRA, Port Harcourt 500272, Rivers
                  <IconButton
                    aria-label=""
                    icon={<BiLinkExternal />}
                    variant="ghost"
                    boxSize="30px"
                    minW={0}
                    ml="10px"
                    borderRadius="full"
                    color="white"
                    _hover={{ bg: "#ffffff20" }}
                  />
                </Text>
              </Box>
            </Box>

            <ChecklistCard title="PLACES TO EAT" />
            <ExpenseTable />
            <Box>
              <ChecklistCard title="TOURS/EXCURSION" />
              <Box pt="15px">
                <ChecklistCard title="SIGHTS TO SEE" />
              </Box>
            </Box>
            <ExtraInformation />
          </Masonry>
        </ResponsiveMasonry>

        <Box my="50px">
          <Checkbox>
            <Text color="white" fontWeight="semibold" fontSize="sm">
              Trip completed
            </Text>
          </Checkbox>
        </Box>
      </Box>
    </Box>
  );
}
