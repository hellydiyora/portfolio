import React from "react";
import RouteData from "./RouteData";
import { ThemeProvider } from "./Context/ThemeProvider";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <RouteData />
      </ThemeProvider>
    </div>
  );
};

export default App;
