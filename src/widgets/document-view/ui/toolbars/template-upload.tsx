import { type FC } from "react";
import { FileText, Loader, Save } from "lucide-react";

import { useDocumentView } from "../../hooks";
import type { IDocumentViewTemplateUploadState } from "../../slice";

const TemplateUpload: FC = () => {
  const { documentView, removeDocument } = useDocumentView();
  const { file } = documentView as IDocumentViewTemplateUploadState;

  const isLoading = false;

  return (
    <div className="sticky top-4 z-10 my-4 flex w-full items-center justify-end gap-2 rounded-xl bg-black/80 p-2 backdrop-blur-md">
      <span className="flex aspect-square h-8 items-center justify-center rounded-lg bg-indigo-500/70">
        <FileText size={18} strokeWidth={1.5} />
      </span>
      <p className="w-full truncate overflow-hidden text-xs">{file.name}</p>
      <button
        className={
          "flex h-8 cursor-pointer items-center justify-center rounded-lg px-3 text-xs font-medium enabled:cursor-pointer enabled:hover:bg-gray-50/15 enabled:hover:backdrop-blur-md disabled:cursor-not-allowed disabled:opacity-80"
        }
        onClick={removeDocument}
      >
        Cancel
      </button>
      <button
        className={
          "flex h-8 items-center justify-center gap-1 rounded-lg bg-gray-50 px-3 text-xs font-medium text-gray-950 enabled:cursor-pointer enabled:hover:bg-gray-50/80 disabled:cursor-not-allowed disabled:opacity-80"
        }
      >
        {isLoading ? (
          <Loader size={16} strokeWidth={1.5} className="animate-spin" />
        ) : (
          <Save size={16} strokeWidth={1.5} />
        )}
        Save
      </button>
    </div>
  );
};

export default TemplateUpload;
