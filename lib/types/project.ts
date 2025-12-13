export type Project = {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  url?: string;
  cta?: string;
  technologies?: string[];
};

export type ProjectDetailSection = {
  title: string;
  body: string;
};

export type ProjectResult = {
  label: string;
  value: string;
  description: string;
};

export type ProjectDetail = Project & {
  heroImage: {
    src: string;
    alt: string;
  };
  summary: string;
  content: ProjectDetailSection[];
  results: ProjectResult[];
};
