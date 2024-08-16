import { Box } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";

export default function MapRenderer() {
  const defaultProps = {
    center: {
      lat: 36.40898528265023,
      lng: 25.43625826507032,
    },
    zoom: 11,
  };
  return (
    <Box
      padding="1rem"
      backgroundColor="white"
      boxShadow="sm"
      borderRadius="16px"
    >
      <div style={{ height: "500px", width: "500px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        ></GoogleMapReact>
      </div>
    </Box>
  );
}
