import { Box, Text, Stack, IconButton } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { MdDone, MdClear } from "react-icons/md";
import ChecklistActions from "./Utilities/ChecklistAction";

export default function ChecklistCard({ title }) {
  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box
          fontSize="xs"
          color="brand.textLight"
          fontFamily="Manrope Variable"
          mb="0px"
          fontWeight="700"
          display="flex"
          alignItems="center"
          gap="4px"
        >
          <ChecklistActions />

          {title}
        </Box>
      </Box>

      <Box
        border="1px solid"
        borderColor="brand.light"
        boxShadow="lg"
        borderRadius="10px"
      >
        <Box padding="10px">
          <Stack spacing={3} direction="column">
            <Box
              borderBottom="1px"
              borderBottomColor="brand.light"
              display="flex"
              gap="6px"
              alignItems="center"
              pb="4px"
              justifyContent="space-between"
            >
              <Box display="flex" gap="6px" alignItems="center">
                <IconButton
                  aria-label=""
                  icon={<MdDone />}
                  variant="ghost"
                  boxSize="25px"
                  minW={0}
                  borderRadius="full"
                  p="0px"
                  color="white"
                  _hover={{ bg: "#ffffff10", opacity: 1 }}
                  opacity={0.5}
                />

                <Text color="white" fontSize="sm">
                  Cheesecake factory
                </Text>
              </Box>

              <Box>
                <IconButton
                  aria-label=""
                  icon={<MdClear />}
                  variant="ghost"
                  boxSize="25px"
                  minW={0}
                  borderRadius="full"
                  p="0px"
                  color="white"
                  _hover={{ bg: "#ffffff10", opacity: 1 }}
                  opacity={0.5}
                />
              </Box>
            </Box>
            <Box
              display="flex"
              gap="6px"
              alignItems="center"
              pb="4px"
              justifyContent="space-between"
            >
              <Box display="flex" gap="6px" alignItems="center">
                <IconButton
                  aria-label=""
                  icon={<MdDone />}
                  variant="ghost"
                  boxSize="25px"
                  minW={0}
                  borderRadius="full"
                  p="0px"
                  color="white"
                  _hover={{ bg: "#ffffff10", opacity: 1 }}
                  opacity={0.5}
                />

                <Text color="white" fontSize="sm">
                  Cheesecake factory
                </Text>
              </Box>

              <Box>
                <IconButton
                  aria-label=""
                  icon={<MdClear />}
                  variant="ghost"
                  boxSize="25px"
                  minW={0}
                  borderRadius="full"
                  p="0px"
                  color="white"
                  _hover={{ bg: "#ffffff10", opacity: 1 }}
                  opacity={0.5}
                />
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

ChecklistCard.propTypes = {
  title: PropTypes.string,
};
