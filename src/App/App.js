import React from "react";
import { BrowserRouter } from "react-router-dom";
import { I18nProvider } from "../i18n";
import Router from "./Router";

function App({basename}) {
  return (
    
    // Override `basename` (e.g: `homepage` in `package.json`)
    <BrowserRouter  basename={basename}>
      {/* Provide `react-intl` context synchronized with Redux state.  */}
      <I18nProvider>
        {/* Add Router For Routing */}
        <Router />
      </I18nProvider>
    </BrowserRouter>
  );
}

export default App;
