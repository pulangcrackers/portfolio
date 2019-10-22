import React from "react";

import NavSidebar from "./Components/Navbar/NavSidebar";

import { BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import "./App.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Fredoka One"].join(",")
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavSidebar />
      </Router>
    </ThemeProvider>
  );
};

export default App;
