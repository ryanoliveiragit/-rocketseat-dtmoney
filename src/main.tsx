import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { App } from "./App";
import { defaultTheme } from "./styles/themes/default";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
}
