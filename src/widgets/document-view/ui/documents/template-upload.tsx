import { useEffect, useRef, type FC } from "react";
import { renderAsync } from "docx-preview";

import { useDocumentView } from "../../hooks";
import { documentRenderingOptions } from "../../constants";
import type { IDocumentViewTemplateUploadState } from "../../slice";

const TemplateUpload: FC = () => {
  const { documentView } = useDocumentView();
  const { file } = documentView as IDocumentViewTemplateUploadState;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderTemplate = async () => {
      if (containerRef.current !== null) {
        containerRef.current.innerHTML = "";
        void renderAsync(await file.arrayBuffer(), containerRef.current, undefined, documentRenderingOptions);
      }
    };
    void renderTemplate();
  }, [file]);

  return <div ref={containerRef} />;
};

export default TemplateUpload;
