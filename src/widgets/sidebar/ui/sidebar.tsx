import { useEffect, useState, type FC } from "react";
import { Link, useLocation } from "react-router";
import { Folder, FileCode2, SquarePen, MessagesSquare, ChevronRight, ChevronLeft } from "lucide-react";
import clsx from "clsx";

import { IconButton } from "@/shared/ui";
import { Routes } from "@/shared/constants";
import { useDocumentView } from "@/widgets/document-view";

const Sidebar: FC = () => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const location = useLocation();
  const { documentView } = useDocumentView();

  useEffect(() => {
    queueMicrotask(() => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setIsSidebarHidden(true);
      }
    });
  }, [location]);

  useEffect(() => {
    setIsSidebarHidden(documentView.state !== "inactive");
  }, [documentView.state]);

  useEffect(() => {
    if (documentView.state === "inactive") {
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;
    const controller = new AbortController();

    document.addEventListener(
      "mousemove",
      (e) => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
          if (e.clientX < 16 && isSidebarHidden) {
            setIsSidebarHidden(false);
          }

          if (e.clientX > 72 && !isSidebarHidden) {
            setIsSidebarHidden(true);
          }
        }, 10);
      },
      { signal: controller.signal }
    );

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [isSidebarHidden, documentView.state]);

  return (
    <aside
      className={clsx(
        "fixed top-0 z-30 flex h-full w-16 flex-col items-center justify-start gap-y-8 bg-gray-50/5 py-4 backdrop-blur-md",
        { "-left-16": isSidebarHidden }
      )}
    >
      <button
        className={
          "absolute -right-7 flex h-8 w-7 cursor-pointer items-center rounded-r-lg bg-gray-50 pl-[3px] hover:bg-gray-50/80"
        }
        onClick={() => setIsSidebarHidden((prev) => !prev)}
      >
        {isSidebarHidden ? (
          <ChevronRight className="text-gray-800" size={20} strokeWidth={1.5} />
        ) : (
          <ChevronLeft className="text-gray-800" size={20} strokeWidth={1.5} />
        )}
      </button>
      <Link to={"/"}>
        <img alt={"Docbyte"} src={"/docbyte.svg"} width={32} height={32} />
      </Link>
      {[
        { path: Routes.TEMPLATES, icon: FileCode2 },
        { path: Routes.DOCUMENTS, icon: Folder },
        { path: Routes.CHATS, icon: MessagesSquare },
        { path: Routes.HOME, icon: SquarePen },
      ].map(({ path, icon: Icon }) => (
        <IconButton as="link" size="lg" to={path} icon={Icon} key={path} />
      ))}
    </aside>
  );
};

export default Sidebar;
