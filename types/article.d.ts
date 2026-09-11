export interface CategoryArticle {
  id: number;
  name: string;
  slug: string;
  description?: string;
}

export interface ArticleImage {
  id: number;
  article: number;
  file: string;
  file_url: string;
  alt_text: string;
  display_order: number;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  image_cover: string;
  image_cover_url: string;
  description: string;
  content: string;
  author: string;
  category_articles: string | null;
  category_articles_detail: CategoryArticle | null;
  status: "draft" | "published";
  date_published: string;
  images?: ArticleImage[];
}
