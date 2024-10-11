import { useSetQueryParams } from "../../hooks/useSetQueryParms";
import { Box, Center, IconButton } from "@chakra-ui/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useSearchParams } from "react-router-dom";

export function Pagination({ disableNext }) {
  const { setQueryParams } = useSetQueryParams();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const pageNum = page ? Number(page) : 0;

  return (
    <Box
      display="flex"
      alignItems="stretch"
      justifyContent="center"
      gap="6px"
      py="10px"
      borderBottomRadius="10px"
    >
      <IconButton
        aria-label=""
        icon={<MdChevronLeft size="1.4rem" />}
        boxSize="33px"
        boxShadow="sm"
        bg="#EBEBEB"
        _hover={{ bg: "#bfbfbf" }}
        color="rgb(48, 48, 48)"
        onClick={() => setQueryParams({ page: Number(page) - 1 })}
        isDisabled={pageNum === 0 || pageNum === 1}
      />
      <Center color="text.secondary" minWidth="25px">
        {pageNum === 0 ? 1 : pageNum}
      </Center>
      <IconButton
        aria-label=""
        icon={<MdChevronRight size="1.4rem" />}
        boxSize="33px"
        boxShadow="sm"
        bg="#EBEBEB"
        _hover={{ bg: "#bfbfbf" }}
        color="rgb(48, 48, 48)"
        onClick={() =>
          setQueryParams({ page: Number(page) === 0 ? 2 : Number(page) + 1 })
        }
        isDisabled={!disableNext}
      />
    </Box>
  );
}
