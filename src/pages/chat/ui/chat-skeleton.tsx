import type { FC } from "react";

const ChatSkeleton: FC = () => {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-y-6 px-4">
      <span className="mx-auto h-6 w-full max-w-sm animate-pulse rounded-full bg-gray-800" />
      <div className="ml-auto w-full max-w-xs rounded-xl border border-gray-50/20 bg-gray-50/5 px-3 py-2 sm:max-w-md md:max-w-lg">
        <div className="flex flex-col gap-2">
          <span className="h-3.5 w-full max-w-sm animate-pulse rounded-full bg-gray-800" />
          <span className="h-3.5 w-full max-w-xs animate-pulse rounded-full bg-gray-800" />
          <span className="h-3.5 w-full max-w-[8rem] animate-pulse rounded-full bg-gray-800" />
        </div>
      </div>
      <div className="flex items-start gap-3">
        <div className="bg-ai-radial mb-auto flex h-10 w-10 min-w-10 items-center justify-center rounded-full border border-gray-50/20">
          <img alt="Docbyte" src="/docbyte-d.svg" width={20} height={20} />
        </div>
        <div className="flex w-full flex-col gap-2">
          <span className="h-3.5 w-full max-w-sm animate-pulse rounded-full bg-gray-800" />
          <span className="h-3.5 w-full max-w-xs animate-pulse rounded-full bg-gray-800" />
          <span className="h-3.5 w-full max-w-[8rem] animate-pulse rounded-full bg-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default ChatSkeleton;
