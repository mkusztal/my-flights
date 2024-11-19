import React from "react";
import { Card, CardContent, Typography, Grid2 } from "@mui/material";
import { Flight } from "../../../interfaces/types";

interface FlightResultsProps {
  flights: Flight[];
}

export const FlightResults: React.FC<FlightResultsProps> = ({ flights }) => {
  return (
    <Grid2 container spacing={2} sx={{ marginTop: 4 }}>
      {flights.map((flight, index) => (
        <Grid2 key={index}>
          <Card variant='outlined' sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant='h6' component='div'>
                {flight.destination}
              </Typography>
              <Typography color='text.secondary'>
                Origin: {flight.origin}
              </Typography>
              <Typography variant='body2' sx={{ marginTop: 1 }}>
                Price: ${flight.price}
              </Typography>
              <Typography variant='body2'>
                Duration: {flight.duration}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};
