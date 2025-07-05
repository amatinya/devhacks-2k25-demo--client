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

export interface IChatMessageComponent {
  _id: string;
  type: "template" | "document";
  name: string;
}

export interface IChatMessage {
  role: "user" | "assistant";
  content: string;
  components: IChatMessageComponent[];
}

export interface IChat {
  _id: string;
  name: string;
  messages: IChatMessage[];
  createdAt: string;
  updatedAt: string;
}
