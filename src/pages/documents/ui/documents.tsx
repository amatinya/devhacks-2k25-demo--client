import type { FC } from "react";
import { FileSearch } from "lucide-react";
import clsx from "clsx";

import { DtcSkeleton } from "@/entities/dtc-skeleton";
import { Document } from "@/entities/document";

import { useDocumentsQuery } from "../api";

const Documents: FC = () => {
  const { data: documentsData, isLoading } = useDocumentsQuery();

  const hasDocuments = !isLoading && documentsData && documentsData.total > 0;
  const isEmpty = !isLoading && (!documentsData || documentsData.total === 0);

  return (
    <>
      <h2 className="mb-4 w-full text-lg font-semibold">
        My Documents
        {hasDocuments && ` (${documentsData.total})`}
      </h2>
      <div
        className={clsx("flex h-full w-full flex-col gap-y-4", {
          "justify-center": isEmpty,
        })}
      >
        {isLoading ? (
          Array.from({ length: 3 }).map((_, idx) => <DtcSkeleton key={`skeleton-${idx}`} />)
        ) : hasDocuments ? (
          documentsData.documents.map((document) => <Document {...document} key={document._id} />)
        ) : (
          <FileSearch size={64} strokeWidth={1.5} className="mx-auto mt-16 text-gray-600" />
        )}
      </div>
    </>
  );
};

export default Documents;
