import { useEffect, useState, type FC } from "react";
import { FileCode2, CalendarDays, FileJson2, Database, ChevronDown, ChevronUp } from "lucide-react";

import { formatDate, formatFileSize } from "@/shared/lib";

import { useDocumentView } from "../../hooks";
import type { IDocumentViewTemplatePreviewState } from "../../slice";

const TemplatePreview: FC = () => {
  const { documentView, removeDocument } = useDocumentView();
  const [isMetadataVisible, setIsMetadataVisible] = useState(false);

  const { file } = documentView as IDocumentViewTemplatePreviewState;

  useEffect(() => {
    setIsMetadataVisible(false);
  }, [documentView]);

  return (
    <div className="sticky top-4 z-10 my-4 flex w-full flex-col gap-2 rounded-xl bg-black/80 p-2 backdrop-blur-md">
      <div className="flex items-center justify-end gap-2">
        <span className="flex aspect-square h-8 items-center justify-center rounded-lg bg-indigo-500/70">
          <FileCode2 size={18} strokeWidth={1.5} />
        </span>
        <p
          className="mr-auto flex cursor-pointer items-center gap-1 truncate text-xs hover:underline"
          onClick={() => setIsMetadataVisible((isMetadataVisible) => !isMetadataVisible)}
        >
          <span className={"truncate overflow-hidden"}>{file.name}</span>
          {isMetadataVisible ? (
            <ChevronUp size={14} className={"min-w-3.5"} strokeWidth={1.5} />
          ) : (
            <ChevronDown size={14} className={"min-w-3.5"} strokeWidth={1.5} />
          )}
        </p>
        <button
          className={
            "flex h-8 cursor-pointer items-center justify-center rounded-lg px-3 text-xs font-medium enabled:cursor-pointer enabled:hover:bg-gray-50/15 enabled:hover:backdrop-blur-md disabled:cursor-not-allowed disabled:opacity-80"
          }
          onClick={removeDocument}
        >
          Close
        </button>
      </div>
      {isMetadataVisible && (
        <div className="flex w-full flex-col gap-2 rounded-lg p-2 text-xs">
          <div className="flex items-center gap-2">
            <Database size={18} strokeWidth={1.5} />
            <p>Size: {formatFileSize(file.size)}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="flex h-6 items-center gap-2 self-start">
              <FileJson2 size={18} className="min-w-[18px]" strokeWidth={1.5} />
              Variables:
            </p>
            <div className="flex flex-wrap gap-2">
              {file.variables.map((v, idx) => (
                <span
                  className="flex h-6 items-center rounded-md bg-gray-50 px-2 text-[11px] font-medium tracking-wide text-gray-950"
                  key={idx}
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays size={18} strokeWidth={1.5} />
            <p>Created: {formatDate(new Date(file.createdAt))}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplatePreview;
