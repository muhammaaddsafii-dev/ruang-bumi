export interface Article {
    id: number;
    title: string;
    slug: string;
    description: string;
    content: string;
    image_cover: string;
    category: string;
    status: 'draft' | 'published';
    author: string;
    date_published: string;
  }