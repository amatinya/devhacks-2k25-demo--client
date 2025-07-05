import type { FC } from "react";
import { Eye, Trash2, FileCode2 } from "lucide-react";
import clsx from "clsx";

import { IconButton } from "@/shared/ui";
import { formatDate } from "@/shared/lib";
import { useDocumentView } from "@/widgets/document-view";
import type { IDocument } from "@/app/types/global";

import { useDocumentDeleteMutation } from "../api";

interface IDocumentProps extends IDocument {
  onlyView?: boolean;
}

const Document: FC<IDocumentProps> = ({ onlyView = false, ...document }) => {
  const { addDocument } = useDocumentView();

  const deleteDocumentMutation = useDocumentDeleteMutation(document);

  const onDocumentPreview = () => {
    addDocument({ state: "document-preview", file: document });
  };

  return (
    <div
      className={clsx(
        "flex w-full min-w-0 flex-shrink-0 items-center gap-x-2 rounded-xl border border-gray-50/20 p-2",
        { "opacity-50": deleteDocumentMutation.isPending }
      )}
    >
      <div
        onClick={deleteDocumentMutation.isPending ? undefined : onDocumentPreview}
        className={clsx("flex h-10 w-10 min-w-10 items-center justify-center rounded-md bg-indigo-500/70", {
          "cursor-pointer": !deleteDocumentMutation.isPending,
        })}
      >
        <FileCode2 size={22} strokeWidth={1.5} />
      </div>
      <div className="w-full min-w-0">
        <p
          className={clsx("flex-1 truncate overflow-hidden text-sm whitespace-nowrap", {
            "cursor-pointer hover:underline": !deleteDocumentMutation.isPending,
          })}
          onClick={deleteDocumentMutation.isPending ? undefined : onDocumentPreview}
        >
          {document.name}
        </p>
        <span className="text-xs text-gray-400">{formatDate(new Date(document.createdAt))}</span>
      </div>
      <div className="flex items-center gap-1">
        <IconButton icon={Eye} disabled={deleteDocumentMutation.isPending} onClick={onDocumentPreview} />
        {!onlyView && (
          <IconButton
            icon={Trash2}
            disabled={deleteDocumentMutation.isPending}
            onClick={() => deleteDocumentMutation.mutate()}
          />
        )}
      </div>
    </div>
  );
};

export default Document;
