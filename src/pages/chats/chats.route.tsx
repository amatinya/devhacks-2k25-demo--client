import type { RouteObject } from "react-router";

import { Routes } from "@/shared/constants";

import { Chats } from "./ui";

export default { path: Routes.CHATS, element: <Chats /> } as RouteObject;
