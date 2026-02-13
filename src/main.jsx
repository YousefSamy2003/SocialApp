import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import TokenContextProvider from "./Context/TokenContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TokenContextProvider>
      <App />
    </TokenContextProvider>
    <ToastContainer position="bottom-right" />
  </StrictMode>,
);
