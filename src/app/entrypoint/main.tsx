import { createRoot } from "react-dom/client";

import { ReduxProvider, RouterProvider } from "../providers";

import "../styles/main.css";

createRoot(document.getElementById("root")!).render(
  <ReduxProvider>
    <RouterProvider />
  </ReduxProvider>
);
