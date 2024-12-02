import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./styles/index.scss";
import ThemeProvider from "./contexts/themeContext.js";
import NavigationProvider from "./contexts/navigationContext.js";

createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider>
    <NavigationProvider>
      <StrictMode>
        <App />
      </StrictMode>
      ,
    </NavigationProvider>
  </ThemeProvider>
);
