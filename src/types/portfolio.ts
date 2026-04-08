export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  category: 'web' | 'automation' | 'ui';
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
