import type { RouteObject } from "react-router";

import { Routes } from "@/shared/constants";

import { ChatPage } from "./ui";

export default { path: Routes.CHAT, element: <ChatPage /> } as RouteObject;
