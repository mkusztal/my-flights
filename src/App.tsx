import React from "react";
import "./App.css";
import { AppBar, Toolbar } from "@mui/material";
import { HomePage } from "./components/pages/HomePage";

const App: React.FC = () => {
  return (
    <div className='App'>
      <AppBar position='static'>
        <Toolbar>My flights</Toolbar>
      </AppBar>
      <HomePage />
    </div>
  );
};

export default App;
