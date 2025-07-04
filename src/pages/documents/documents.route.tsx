import type { RouteObject } from "react-router";

import { Routes } from "@/shared/constants";

import { Documents } from "./ui";

export default { path: Routes.DOCUMENTS, element: <Documents /> } as RouteObject;
