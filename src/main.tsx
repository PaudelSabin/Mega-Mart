/**
 * main.tsx  (entry point)
 * -----------------------
 * Vite starts here. It mounts the React app into <div id="root"> from
 * index.html and loads the global styles once.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // global reset, colour variables, .container
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
