export enum PostType {
  Artikkel = 1,
  Reisebrev = 2,
  Matspalten = 3,
}

export interface Frontmatter {
  type: PostType;
  draft?: boolean;
  title: string;
  author: string;
  publishedAt: string;
  summary: string;
  image: {
    url: string;
    alt: string;
  };
  elementsPerRow?: number;
}

export interface ArtikkelFrontmatter extends Frontmatter {}

export interface ReisebrevFrontmatter extends Frontmatter {}

export interface MatspaltenFrontmatter extends Frontmatter {}
