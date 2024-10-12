import EmployeesTable from "./EmployeesTable";
import { Box, Button } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import SearchBar from "../Common/SearchBar";

export default function EmployeesView() {
  return (
    <div>
      <Box
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={{ lg: "center" }}
        justifyContent="space-between"
        gap="10px"
        mb="1.5rem"
      >
        <Box>
          <Button height="40px" rightIcon={<AiOutlinePlus />} bg="brand.dark">
            Add employee
          </Button>
        </Box>

        <Box>
          <SearchBar placeholder="Search employee" />
        </Box>
      </Box>

      <EmployeesTable />
    </div>
  );
}
