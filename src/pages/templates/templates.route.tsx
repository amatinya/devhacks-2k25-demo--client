import { type RouteObject } from "react-router";

import { Routes } from "@/shared/enums";

import { Templates } from "./ui";

const templatesRoute: RouteObject = { path: Routes.TEMPLATES, element: <Templates /> };

export default templatesRoute;
