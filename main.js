import { StrictMode } from "react";
import React from "react";
import App from "./src/App";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
