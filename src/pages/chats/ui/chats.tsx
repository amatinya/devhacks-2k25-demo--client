import type { FC } from "react";
import { FileSearch } from "lucide-react";
import clsx from "clsx";

import { DtcSkeleton } from "@/entities/dtc-skeleton";
import { Chat } from "@/entities/chat";

import { useChatsQuery } from "../api";

const Chats: FC = () => {
  const { data: chatsData, isLoading } = useChatsQuery();

  const hasChats = !isLoading && chatsData && chatsData.total > 0;
  const isEmpty = !isLoading && (!chatsData || chatsData.total === 0);

  return (
    <>
      <h2 className="mb-4 w-full text-lg font-semibold">
        My Chats
        {hasChats && ` (${chatsData.total})`}
      </h2>
      <div
        className={clsx("flex h-full w-full flex-col gap-y-4", {
          "justify-center": isEmpty,
        })}
      >
        {isLoading ? (
          Array.from({ length: 3 }).map((_, idx) => <DtcSkeleton key={`skeleton-${idx}`} />)
        ) : hasChats ? (
          chatsData.chats.map((chat) => <Chat {...chat} key={chat._id} />)
        ) : (
          <FileSearch size={64} strokeWidth={1.5} className="mx-auto mt-16 text-gray-600" />
        )}
      </div>
    </>
  );
};

export default Chats;
