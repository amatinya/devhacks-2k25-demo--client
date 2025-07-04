import type { FC } from "react";
import { RouterProvider as ReactRouterProvider } from "react-router";

import { browserRouter } from "../router";

const RouterProvider: FC = () => {
  return <ReactRouterProvider router={browserRouter} />;
};

export default RouterProvider;
