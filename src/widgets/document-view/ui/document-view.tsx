import type { FC } from "react";

import { useDocumentView } from "../hooks";
import * as Toolbars from "./toolbars";
import * as Documents from "./documents";

const ComponentsMap = {
  "template-upload": { toolbar: Toolbars.TemplateUpload, document: Documents.TemplateUpload },
  "template-preview": { toolbar: Toolbars.TemplatePreview, document: Documents.TemplatePreview },
  "document-preview": { toolbar: Toolbars.DocumentPreview, document: Documents.DocumentPreview },
} as const;

const DocumentPreview: FC = () => {
  const { documentView } = useDocumentView();
  const { toolbar: Toolbar, document: Document } = ComponentsMap[documentView.state as keyof typeof ComponentsMap];

  return (
    <div className="flex h-screen flex-col overflow-y-scroll bg-gray-500/75 px-4">
      <Toolbar />
      <Document />
    </div>
  );
};

export default DocumentPreview;
