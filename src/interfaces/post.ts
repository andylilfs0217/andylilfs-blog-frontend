import { type Author } from "./author";

export type Post = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  coverImage: string;
  author: Author;
  subtitle: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
