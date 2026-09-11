export interface CategoryPortfolio {
  id: number;
  name: string;
  slug: string;
}

export interface PortfolioImage {
  id: number;
  portfolio: number;
  image_url: string;
  image_url_signed: string;
  alt_text: string;
  display_order: number;
}

export interface Portfolio {
  id: string;
  title: string;
  slug: string;
  image_cover: string;
  image_cover_url: string;
  summary: string;
  description: string;
  category_portfolios: string | null;
  category_portfolios_detail: CategoryPortfolio | null;
  status: "draft" | "published";
  project_date: string;
  live_url: string;
  repo_url: string;
  images?: PortfolioImage[];
}
