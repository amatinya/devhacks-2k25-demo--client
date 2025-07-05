import { useEffect, useRef, type FC } from "react";
import { renderAsync } from "docx-preview";
import clsx from "clsx";

import { useDocumentView } from "../../hooks";
import { documentRenderingOptions } from "../../constants";
import { useDocumentQuery } from "../../api";
import type { IDocumentViewDocumentPreviewState } from "../../slice";

const DocumentPreview: FC = () => {
  const { documentView } = useDocumentView();
  const { file } = documentView as IDocumentViewDocumentPreviewState;
  const containerRef = useRef<HTMLDivElement>(null);

  const { isLoading, isSuccess, data } = useDocumentQuery(file._id);

  useEffect(() => {
    if (isSuccess && data && containerRef.current) {
      containerRef.current.innerHTML = "";
      void renderAsync(data.data, containerRef.current, undefined, documentRenderingOptions);
    }
  }, [data, isSuccess]);

  return (
    <>
      <div ref={containerRef} className={clsx({ hidden: isLoading })} />
      {isLoading && (
        <div className="font-display mx-auto mb-4 aspect-[1/1.4142] w-full max-w-[595px] animate-pulse bg-gray-50 p-[48pt]" />
      )}
    </>
  );
};

export default DocumentPreview;
