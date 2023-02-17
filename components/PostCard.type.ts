import { Author } from './Author';

export interface Post {
  author: Author;
  createdAt: Date;
  slug: string;
  title: string;
  excerpt: string;
  isFeatured: boolean;
  featuredImage: {
    url: string;
  };
  categories: [{ name: string; slug: string }];
  content: {
    html: string;
  };
}
