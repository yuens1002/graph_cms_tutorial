export interface Post {
  author: {
    bio?: string;
    name: string;
    id: string;
    photo?: {
      url: string;
    };
  };
  createdAt: Date;
  slug: string;
  title: string;
  excerpt: string;
  isFeatured: boolean;
  featuredImage: {
    url: string;
  };
  categories: [{ name: string; slug: string }];
}
