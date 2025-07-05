import type { FC } from "react";

import type { IChatMessage } from "@/app/types/global";

const UserMessage: FC<IChatMessage> = ({ content }) => {
  return (
    <p className="ml-auto max-w-md rounded-xl border border-gray-50/20 bg-gray-50/5 px-3 py-2 break-words whitespace-pre-wrap backdrop-blur-md">
      {content}
    </p>
  );
};

export default UserMessage;
