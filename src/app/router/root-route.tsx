import { type FC } from "react";
import { Outlet } from "react-router";

import { Sidebar } from "@/widgets/sidebar";

const RootRoute: FC = () => {
  return (
    <div className="grid h-screen w-full grid-cols-2">
      <div className={"ray-gradient"} />
      <div className={"relative col-span-2 flex h-full w-full flex-col"}>
        <Outlet />
        <Sidebar />
      </div>
    </div>
  );
};

export default RootRoute;
