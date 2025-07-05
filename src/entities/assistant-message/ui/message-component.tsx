import type { FC } from "react";
import { FileCode2, FileText, Eye } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import type { IChatMessageComponent, IDocument, ITemplate } from "@/app/types/global";
import { IconButton } from "@/shared/ui";
import { axios } from "@/shared/api";
import { RQKeys } from "@/shared/constants";
import { useDocumentView } from "@/widgets/document-view";
import clsx from "clsx";

const MessageComponent: FC<IChatMessageComponent> = ({ _id, type, name }) => {
  const { addDocument } = useDocumentView();

  const componentInfoQuery = useQuery({
    queryFn: () =>
      type === "document" ? axios.get<IDocument>(`/documents/${_id}`) : axios.get<ITemplate>(`/templates/${_id}`),
    select: (response) => response.data,
    queryKey: [RQKeys.CHATS, "components", type, _id],
  });

  const onComponentPreview = () => {
    if (!componentInfoQuery.isLoading) {
      addDocument(
        type === "document"
          ? { state: "document-preview", file: componentInfoQuery.data! as IDocument }
          : { state: "template-preview", file: componentInfoQuery.data! as ITemplate }
      );
    }
  };

  return (
    <div className="inline-flex min-w-0 items-center gap-x-2 rounded-xl border border-gray-50/20 p-2">
      <div
        className={clsx("flex h-10 w-10 min-w-10 items-center justify-center rounded-md bg-indigo-500/70", {
          "cursor-pointer": !componentInfoQuery.isLoading,
        })}
        onClick={onComponentPreview}
      >
        {type === "document" ? <FileText size={22} strokeWidth={1.5} /> : <FileCode2 size={22} strokeWidth={1.5} />}
      </div>
      <p
        className={clsx("flex-1 truncate overflow-hidden text-sm whitespace-nowrap", {
          "cursor-pointer hover:underline": !componentInfoQuery.isLoading,
        })}
        onClick={onComponentPreview}
      >
        {name}
      </p>
      <IconButton icon={Eye} onClick={onComponentPreview} disabled={componentInfoQuery.isLoading} />
    </div>
  );
};

export default MessageComponent;
