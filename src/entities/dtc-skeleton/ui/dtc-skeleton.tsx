import type { FC } from "react";

// Document | Template | Chat

const DtcSkeleton: FC = () => {
  return (
    <div className="flex w-full min-w-0 flex-shrink-0 items-center gap-x-2 rounded-xl border border-gray-50/20 p-2">
      <div className="flex h-10 w-10 min-w-10 animate-pulse items-center justify-center rounded-md bg-gray-800" />
      <div className="flex h-full w-full flex-col justify-center gap-2">
        <span className="h-3.5 w-64 animate-pulse rounded-full bg-gray-800" />
        <span className="h-2.5 w-32 animate-pulse rounded-full bg-gray-800" />
      </div>
    </div>
  );
};

export default DtcSkeleton;
