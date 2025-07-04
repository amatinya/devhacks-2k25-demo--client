import type { IDocument, ITemplate } from "@/app/types/global";

export interface IDocumentViewTemplateUploadState {
  state: "template-upload";
  file: File; // Buffer
}

export interface IDocumentViewTemplatePreviewState {
  state: "template-preview";
  file: ITemplate;
}

export interface IDocumentViewDocumentPreviewState {
  state: "document-preview";
  file: IDocument;
}

export interface IDocumentViewInactiveState {
  state: "inactive";
}

export interface IDocumentViewState {
  documentView:
    | IDocumentViewTemplateUploadState
    | IDocumentViewTemplatePreviewState
    | IDocumentViewDocumentPreviewState
    | IDocumentViewInactiveState;
}
