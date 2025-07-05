import type { RouteObject } from "react-router";

import { Routes } from "@/shared/constants";

import { ChatsPage } from "./ui";

export default { path: Routes.CHATS, element: <ChatsPage /> } as RouteObject;
