import {
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useSetQueryParams } from "../..//hooks/useSetQueryParms";
import { MdClear } from "react-icons/md";

export default function SearchBar({
  placeholder = "Search",
  align = "flex-start",
}) {
  const { setQueryParams } = useSetQueryParams();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setQueryParams({ q: searchQuery });
  };

  const handleClear = () => {
    setSearchQuery("");
    setQueryParams({ q: "" });
  };

  const search = (value) => {
    setSearchQuery(value);
    setQueryParams({ q: value });
  };

  return (
    <HStack
      as="form"
      onSubmit={handleSearch}
      spacing={0}
      gap={2}
      justifyContent={align}
    >
      <Box flex="1 1 10px" maxWidth={{ base: "100%", lg: "370px" }}>
        <InputGroup maxWidth={{ base: "100%", lg: "370px" }}>
          <InputLeftElement pointerEvents="none">
            <CiSearch size="1.3rem" color="gray" />
          </InputLeftElement>
          <Input
            type="text"
            height="42px"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => search(e.target.value)}
          />

          <InputRightElement>
            <IconButton
              aria-label=""
              icon={<MdClear />}
              variant="ghost"
              boxSize="25px"
              minW={0}
              borderRadius="full"
              color="brand.400"
              _hover={{ bg: "gray.200" }}
              onClick={() => handleClear()}
            />
          </InputRightElement>
        </InputGroup>
      </Box>
    </HStack>
  );
}
