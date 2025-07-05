import type { RouteObject } from "react-router";

import { Routes } from "@/shared/constants";

import { DocumentsPage } from "./ui";

export default { path: Routes.DOCUMENTS, element: <DocumentsPage /> } as RouteObject;
