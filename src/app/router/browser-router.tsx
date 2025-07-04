import { createBrowserRouter } from "react-router";

import { Routes } from "@/shared/constants";
import { homeRoute } from "@/pages/home";
import { templatesRoute } from "@/pages/templates";
import { documentsRoute } from "@/pages/documents";
import { chatsRoute } from "@/pages/chats";

import RootRoute from "./root-route";

const browserRouter = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <RootRoute />,
    children: [homeRoute, templatesRoute, documentsRoute, chatsRoute],
  },
]);

export default browserRouter;
