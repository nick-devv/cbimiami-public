export type WPTextField = string | null | undefined;

export interface WPRendered {
  rendered: string;
}

export interface WPMeta {
  scf_fields?: Record<string, unknown>;
  acf?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface WPPost {
  id: number;
  slug: string;
  link?: string;
  date: string;
  title: WPRendered;
  excerpt?: WPRendered;
  content?: WPRendered;
  featured_media?: number;
  featuredImage?: WPImage;
  categories?: number[];
  tags?: number[];
  meta?: WPMeta;
  scf_fields?: Record<string, unknown>;
}

export interface WPImage {
  id: number;
  alt_text?: string;
  source_url: string;
  media_details?: {
    sizes?: Record<string, { source_url: string; width: number; height: number }>;
  };
}

export interface WPTerm {
  id: number;
  slug: string;
  name: string;
  taxonomy: string;
  description?: string;
  category_image?: string; 
  icon_url?: string; 
  scf_fields?: Record<string, unknown>;
  acf?: Record<string, unknown>;
}

export interface WPMenuItem {
  id: number;
  title: WPRendered;
  url: string;
  parent?: number;
  children?: WPMenuItem[];
  target?: string;
}

export interface WPSeo {
  title?: string;
  description?: string;
  keywords?: string[];
}

export interface WordPressCollectionResponse<T> {
  data: T[];
  total?: number;
  totalPages?: number;
}

