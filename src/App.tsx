import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import NavSidebar from "./Components/Navbar/NavSidebar";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavSidebar />
      </Router>
    </div>
  );
};

export default App;
