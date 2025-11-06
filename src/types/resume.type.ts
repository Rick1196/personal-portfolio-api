export type Experience = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  company: string;
  description: Description[];
  from: string;
  technologies: string[];
  title: string;
  to?: string;
};

type Description = {
  _key: string;
  _type: string;
  children: Child[];
  markDefs: any[];
  style: string;
  level?: number;
  listItem?: string;
};

type Child = {
  _key: string;
  _type: string;
  marks: any[];
  text: string;
};
