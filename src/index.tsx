import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./Portfolio";
import "./index.css";
import "normalize.css";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider>
      <Portfolio />
  </ThemeProvider>
);
