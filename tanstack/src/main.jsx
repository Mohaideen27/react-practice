import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Query, QueryClient, QueryClientProvider } from "@tanstack/react-query";

let myClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <>
    <QueryClientProvider client={myClient}>
      <App />
    </QueryClientProvider>
  </>,
);
