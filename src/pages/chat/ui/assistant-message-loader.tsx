import type { FC } from "react";
import { Loader } from "lucide-react";

const AssistantMessageLoader: FC = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-ai-radial mb-auto flex aspect-square w-10 min-w-10 items-center justify-center rounded-full border border-gray-50/20">
        <img alt={"Docbyte"} src={"/docbyte-d.svg"} width={20} height={20} />
      </div>
      <span className="flex aspect-square w-8 items-center justify-center rounded-full border border-gray-50/20 bg-gray-50/5">
        <Loader size={16} className="animate-spin" strokeWidth={1.5} />
      </span>
    </div>
  );
};

export default AssistantMessageLoader;
