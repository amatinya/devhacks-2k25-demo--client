import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { IDocument, ITemplate } from "@/app/types/global";

import type { IDocumentViewState } from "./types.ts";

const initialState: IDocumentViewState = {
  documentView: { state: "inactive" },
};

export const documentViewSlice = createSlice({
  name: "documents",
  initialState,
  reducers: {
    setDocumentView(
      state,
      action: PayloadAction<
        | { state: "template-upload"; file: File }
        | { state: "template-preview"; file: ITemplate }
        | { state: "document-preview"; file: IDocument }
        | { state: "inactive" }
      >
    ) {
      state.documentView = action.payload;
    },
  },
});

export const { setDocumentView } = documentViewSlice.actions;

export const documentViewReducer = documentViewSlice.reducer;
