export type AppType = 'app' | 'notebook' | 'tool';

export interface AppManifestItem {
  id: string;
  title: string;
  type: AppType;
  description?: string;
  url: string;
  icon?: string;
  tags?: string[];
  featured?: boolean;
  order?: number;
}
