import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;

  asset: {
    url: string;
    alt: string | null;
  };

  image: string;
  images: Array<{ asset: { url: string; alt: string | null } }>;
  
  url: string;
  content: PortableTextBlock[];
};
