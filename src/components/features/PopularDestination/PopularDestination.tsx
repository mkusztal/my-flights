import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
import { API_KEYS } from "../../../utils/api_keys";
import { destination } from "../../../utils/context";

export const PopularDestination: React.FC = () => {
  const position = { lat: 53.54992, lng: 10.00678 };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant='h5' gutterBottom>
        Popular Destinations from Helsinki
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "row", gap: 4, marginTop: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Grid2 container direction='column' spacing={2}>
            {destination.map((dest, index) => (
              <Grid2 key={index}>
                <Typography>{`To ${dest.name}`}</Typography>
              </Grid2>
            ))}
          </Grid2>
        </Box>
        <Box sx={{ flex: 1 }}>
          <APIProvider apiKey={API_KEYS.GOOGLE_MAPS_API_KEY}>
            <Map
              defaultCenter={position}
              defaultZoom={5}
              style={{ width: "500px", height: "500px" }}
            >
              <AdvancedMarker position={position} />
            </Map>
          </APIProvider>
        </Box>
      </Box>
    </Box>
  );
};
