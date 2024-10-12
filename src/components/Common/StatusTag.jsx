import { Tag } from "@chakra-ui/react";

export default function StatusTag({ status, label }) {
  const retrieveStatusColor = (arg) => {
    const STATUS = arg.toUpperCase();

    if (STATUS === "PENDING") {
      return "#FFA500";
    } else if (STATUS === "ACCEPTED") {
      return "#4CAF50";
    } else if (STATUS === "SERVED") {
      return "#3F51B5";
    } else if (STATUS === "CANCELED") {
      return "#F44336";
    }
  };

  return (
    <Tag
      bg={retrieveStatusColor(status)}
      color="white"
      fontSize="sm"
      textTransform="capitalize"
    >
      {label || status}
    </Tag>
  );
}
