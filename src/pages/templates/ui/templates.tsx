import type { FC } from "react";
import { FileSearch } from "lucide-react";
import clsx from "clsx";

import { DtcSkeleton } from "@/entities/dtc-skeleton";
import { Template } from "@/entities/template";

import { useTemplatesQuery } from "../api";

const Templates: FC = () => {
  const { data: templatesData, isLoading } = useTemplatesQuery();

  const hasTemplates = !isLoading && templatesData && templatesData.total > 0;
  const isEmpty = !isLoading && (!templatesData || templatesData.total === 0);

  return (
    <>
      <h2 className="mb-4 w-full text-lg font-semibold">
        My Templates
        {hasTemplates && ` (${templatesData.total})`}
      </h2>
      <div
        className={clsx("flex h-full w-full flex-col gap-y-4", {
          "justify-center": isEmpty,
        })}
      >
        {isLoading ? (
          Array.from({ length: 3 }).map((_, idx) => <DtcSkeleton key={`skeleton-${idx}`} />)
        ) : hasTemplates ? (
          templatesData.templates.map((template) => <Template {...template} key={template._id} />)
        ) : (
          <FileSearch size={64} strokeWidth={1.5} className="mx-auto mt-16 text-gray-600" />
        )}
      </div>
    </>
  );
};

export default Templates;
