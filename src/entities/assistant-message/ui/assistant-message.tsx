import { type FC } from "react";
import { CloudCog } from "lucide-react";
import parseHTML from "html-react-parser";

import { type IChatMessage } from "@/app/types/global";

import MessageComponent from "./message-component";

const AssistantMessage: FC<IChatMessage> = ({ content, components }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-ai-radial mb-auto flex aspect-square w-10 min-w-10 items-center justify-center rounded-full border border-gray-50/20">
        <img alt={"Docbyte"} src={"/docbyte-d.svg"} width={20} height={20} />
      </div>
      <div className="flex h-full flex-1 flex-col gap-3 overflow-hidden">
        {content === "<function-call>" ? (
          <div className="inline-flex max-w-max items-center gap-1 rounded-xl bg-gray-50 p-2 text-xs font-medium tracking-wide text-gray-950">
            <CloudCog size={20} strokeWidth={1.5} />
            <span className={"break-words whitespace-pre-wrap"}>Function called and executed successfully!</span>
          </div>
        ) : (
          <div className={"assistant-message space-pre-wrap break-words"}>{parseHTML(content.replace(/\n/g, ""))}</div>
        )}
        {components.length > 0 && (
          <div className="inline-flex w-max max-w-full flex-col gap-2">
            {components.map((c) => (
              <MessageComponent {...c} key={c._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AssistantMessage;
