import {
  Alert,
  Box,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { SearchBar } from "../features/SearchBar/SearchBar";
import { FlightResults } from "../features/FlightResults/FlightResults";
import { Flight } from "../../interfaces/types";
import { searchFlight } from "../../api/app";
import { PopularDestination } from "../features/PopularDestination/PopularDestination";
import { ImportantQuestions } from "../features/ImportantQuestions/ImportantQuestions";
export const HomePage: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const flightsValidation = !loading && !error && flights.length > 0;

  const handleSearch = async (params: any) => {
    setLoading(true);
    setError(null);

    try {
      const apiParams = {
        originSkyId: params.origin,
        destinationSkyId: params.destination,
        date: params.date,
      };

      const flightData = await searchFlight(apiParams);
      setFlights(flightData);
    } catch (error) {
      console.error("Error fetching flights: ", error);
      setError("Failed to fetch flights. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        padding: "2rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Typography variant='h3' component='h1'>
        Find Your Flight
      </Typography>
      <SearchBar onSearch={handleSearch} />

      {flightsValidation && <FlightResults flights={flights} />}

      {loading && (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
        >
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity='error' sx={{ marginTop: "1rem" }}>
          {error}
        </Alert>
      )}

      <Divider sx={{ my: 4 }} />

      {flights.length === 0 && <PopularDestination />}

      <Divider sx={{ my: 4 }} />

      <ImportantQuestions />

      <Divider sx={{ my: 4 }} />
    </Box>
  );
};
