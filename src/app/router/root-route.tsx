import { type FC } from "react";
import { Outlet } from "react-router";
import clsx from "clsx";

import { Sidebar } from "@/widgets/sidebar";
import { useDocumentView, DocumentView } from "@/widgets/document-view";

const RootRoute: FC = () => {
  const { documentView } = useDocumentView();

  return (
    <div className="grid h-screen w-full grid-cols-2">
      <div className={"ray-gradient"} />
      <div
        className={clsx(
          "relative flex h-full w-full flex-col",
          documentView.state === "inactive" ? "col-span-2" : "col-span-1 hidden md:flex"
        )}
      >
        <Outlet />
        <Sidebar />
      </div>
      {documentView.state !== "inactive" && (
        <div className="col-span-2 h-full w-full overflow-auto md:col-span-1">
          <DocumentView />
        </div>
      )}
    </div>
  );
};

export default RootRoute;
