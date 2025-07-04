import type { Options } from "docx-preview";

const documentRenderingOptions: Partial<Options> = {
  inWrapper: true,
  className: "docx",
  ignoreWidth: true,
  ignoreHeight: true,
  breakPages: false,
  renderHeaders: true,
  renderFooters: true,
  renderFootnotes: true,
  renderEndnotes: true,
} as const;

export default documentRenderingOptions;
