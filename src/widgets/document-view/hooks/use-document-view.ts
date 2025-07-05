import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import type { RootState, AppDispatch } from "@/app/store";

import {
  type IDocumentViewTemplatePreviewState,
  type IDocumentViewDocumentPreviewState,
  type IDocumentViewTemplateUploadState,
  type IDocumentViewInactiveState,
  setDocumentView,
} from "../slice";

const useDocumentView = () => {
  const documentsState = useSelector((state: RootState) => state.documentView);
  const dispatch = useDispatch<AppDispatch>();

  const addDocument = useCallback(
    (
      documentView:
        | IDocumentViewInactiveState
        | IDocumentViewTemplateUploadState
        | IDocumentViewTemplatePreviewState
        | IDocumentViewDocumentPreviewState
    ) => dispatch(setDocumentView(documentView)),
    [dispatch]
  );

  const removeDocument = useCallback(() => dispatch(setDocumentView({ state: "inactive" })), [dispatch]);

  return { ...documentsState, addDocument, removeDocument };
};

export default useDocumentView;
