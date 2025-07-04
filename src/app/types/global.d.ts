export interface ITemplate {
  _id: string;
  name: string;
  size: number;
  webContentLink: string;
  variables: string[];
  createdAt: string;
  updatedAt: string;
}

export interface IDocument {
  _id: string;
  name: string;
  size: number;
  webContentLink: string;
  createdAt: string;
  updatedAt: string;
}
