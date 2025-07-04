import { type RouteObject } from "react-router";

import { Routes } from "@/shared/constants";

import { Chats } from "./ui";

const chatsRoute: RouteObject = { path: Routes.CHATS, element: <Chats /> };

export default chatsRoute;
