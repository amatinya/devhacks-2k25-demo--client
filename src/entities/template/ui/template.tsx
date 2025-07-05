import type { FC } from "react";
import { Eye, Trash2, FileCode2 } from "lucide-react";
import clsx from "clsx";

import { IconButton } from "@/shared/ui";
import { formatDate } from "@/shared/lib";
import { useDocumentView } from "@/widgets/document-view";
import type { ITemplate } from "@/app/types/global";

import { useTemplateDeleteMutation } from "../api";

interface ITemplateProps extends ITemplate {
  onlyView?: boolean;
}

const Template: FC<ITemplateProps> = ({ onlyView = false, ...template }) => {
  const { addDocument } = useDocumentView();

  const deleteTemplateMutation = useTemplateDeleteMutation(template);

  const onTemplatePreview = () => {
    if (!deleteTemplateMutation.isPending) {
      addDocument({ state: "template-preview", file: template });
    }
  };

  return (
    <div
      className={clsx(
        "flex w-full min-w-0 flex-shrink-0 items-center gap-x-2 rounded-xl border border-gray-50/20 p-2",
        { "opacity-50": deleteTemplateMutation.isPending }
      )}
    >
      <div
        onClick={onTemplatePreview}
        className={clsx("flex h-10 w-10 min-w-10 items-center justify-center rounded-md bg-indigo-500/70", {
          "cursor-pointer": !deleteTemplateMutation.isPending,
        })}
      >
        <FileCode2 size={22} strokeWidth={1.5} />
      </div>
      <div className="w-full min-w-0">
        <p
          className={clsx("flex-1 truncate overflow-hidden text-sm whitespace-nowrap", {
            "cursor-pointer hover:underline": !deleteTemplateMutation.isPending,
          })}
          onClick={onTemplatePreview}
        >
          {template.name}
        </p>
        <span className="text-xs text-gray-400">{formatDate(new Date(template.createdAt))}</span>
      </div>
      <div className="flex items-center gap-1">
        <IconButton icon={Eye} disabled={deleteTemplateMutation.isPending} onClick={onTemplatePreview} />
        {!onlyView && (
          <IconButton
            icon={Trash2}
            disabled={deleteTemplateMutation.isPending}
            onClick={() => deleteTemplateMutation.mutate()}
          />
        )}
      </div>
    </div>
  );
};

export default Template;
