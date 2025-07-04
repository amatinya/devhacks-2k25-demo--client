import { type FC, type ChangeEventHandler, useRef } from "react";
import { Upload } from "lucide-react";

import { useDocumentView } from "@/widgets/document-view";

const UploadTemplate: FC = () => {
  const { addDocument } = useDocumentView();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onTemplateUpload: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const file = e.target.files?.[0];

    if (file) {
      addDocument({ state: "template-upload", file });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
        fileInputRef.current.files = null;
      }
    }
  };

  return (
    <>
      <button
        onClick={() => fileInputRef.current?.click()}
        className="flex h-10 cursor-pointer items-center gap-2 rounded-full bg-gray-50 px-4 text-xs font-medium text-gray-950 shadow-md hover:shadow-xs"
      >
        <Upload size={18} strokeWidth={1.5} />
        Upload Template
      </button>
      <input ref={fileInputRef} type="file" accept=".docx" onChange={onTemplateUpload} className="hidden" />
    </>
  );
};

export default UploadTemplate;
