import { Event, Launch } from "@prisma/client";

export interface ICreateArticleRequestDTO {
  featured?: boolean | null;
  summary?: string | null;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  publishedAt: string;
  launches: Launch[];
  events: Event[];
}
