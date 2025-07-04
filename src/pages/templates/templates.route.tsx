import type { RouteObject } from "react-router";

import { Routes } from "@/shared/constants";

import { TemplatesPage } from "./ui";

export default { path: Routes.TEMPLATES, element: <TemplatesPage /> } as RouteObject;
