export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
  imageUrl: string;
  readTime: number;
  socialShares: number;
}