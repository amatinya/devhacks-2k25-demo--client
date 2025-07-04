import { createRoot } from "react-dom/client";

import { ReduxProvider, RouterProvider, QueryClientProvider } from "../providers";

import "../styles/main.css";

createRoot(document.getElementById("root")!).render(
  <ReduxProvider>
    <QueryClientProvider>
      <RouterProvider />
    </QueryClientProvider>
  </ReduxProvider>
);
