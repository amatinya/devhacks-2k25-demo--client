import { createRoot } from "react-dom/client";

import { RouterProvider } from "../providers";

import "../styles/main.css";

createRoot(document.getElementById("root")!).render(<RouterProvider />);
