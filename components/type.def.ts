export type Author = {
  name: string;
  photo?: {
    url: string;
  };
  bio?: string;
};

export type Post = {
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
};

export type Category = {
  name: string;
  slug: string;
};

export type Comment = {
  name: string;
  comment: string;
  email: string;
  createdAt?: Date;
};
