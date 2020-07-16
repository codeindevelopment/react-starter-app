import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      {/* Add Router For Routing */}
      <Router />
    </BrowserRouter>
  );
}

export default App;
