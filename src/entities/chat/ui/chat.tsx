import type { FC } from "react";
import { Trash2, Bot, MessageSquareText } from "lucide-react";
import clsx from "clsx";
import { useNavigate } from "react-router";

import type { IChat } from "@/app/types/global";
import { IconButton } from "@/shared/ui";
import { formatDate } from "@/shared/lib";

import { useChatDeleteMutation } from "../api";

const Chat: FC<IChat> = ({ name, updatedAt, _id }) => {
  const navigate = useNavigate();

  const deleteChatMutation = useChatDeleteMutation(_id);

  const onChatOpen = () => {
    if (!deleteChatMutation.isPending) {
      navigate(`/chats/${_id}`);
    }
  };

  return (
    <div
      className={clsx(
        "flex w-full min-w-0 flex-shrink-0 items-center gap-x-2 rounded-xl border border-gray-50/20 p-2",
        { "opacity-50": deleteChatMutation.isPending }
      )}
    >
      <div
        className={clsx("flex h-10 w-10 min-w-10 items-center justify-center rounded-md bg-indigo-500/70", {
          "cursor-pointer": !deleteChatMutation.isPending,
        })}
        onClick={onChatOpen}
      >
        <Bot size={22} strokeWidth={1.5} />
      </div>
      <div className="w-full min-w-0">
        <p
          className={clsx("flex-1 truncate overflow-hidden text-sm whitespace-nowrap", {
            "cursor-pointer hover:underline": !deleteChatMutation.isPending,
          })}
          onClick={onChatOpen}
        >
          {name}
        </p>
        <span className="text-xs text-gray-400">{formatDate(new Date(updatedAt))}</span>
      </div>
      <div className="flex items-center gap-1">
        <IconButton icon={MessageSquareText} onClick={onChatOpen} disabled={deleteChatMutation.isPending} />
        <IconButton icon={Trash2} disabled={deleteChatMutation.isPending} onClick={() => deleteChatMutation.mutate()} />
      </div>
    </div>
  );
};

export default Chat;
