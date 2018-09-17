export interface IBlog {
  id: number;
  visited: number;
  tags: string[];
  title: string;
  author_id: number;
  date: string;
  blog_img_small: string;
  blog_img_big: string;
  body: string;
}
