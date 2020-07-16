import React from "react";
import ReactDOM from "react-dom";


import "./App/scss/_EnglishFonts.scss"; // Import English Fonts
import "./App/scss/_PersianFonts.scss"; // Import Persian Fonts

import "./App/scss/style.scss"; // Global Style

import { YamataI18nProvider } from "./i18n";

import App from "./App/App";

import * as serviceWorker from "./serviceWorker";
const { PUBLIC_URL } = process.env;

ReactDOM.render(
  <YamataI18nProvider>
    <App basename={PUBLIC_URL} />
  </YamataI18nProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
