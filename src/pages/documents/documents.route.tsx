import { type RouteObject } from "react-router";

import { Routes } from "@/shared/constants";

import { Documents } from "./ui";

const documentsRoute: RouteObject = { path: Routes.DOCUMENTS, element: <Documents /> };

export default documentsRoute;
