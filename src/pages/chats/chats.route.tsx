import { type RouteObject } from "react-router";

import { Routes } from "@/shared/enums";

import { Chats } from "./ui";

const chatsRoute: RouteObject = { path: Routes.CHATS, element: <Chats /> };

export default chatsRoute;
