export type Node = {
  id: string;
  type?: string;
  metadata?: {
    title?: string;
    subtitle?: string;
  }
  coordinates?: {
    x: number;
    y: number;
  }
};

export type Link = {
  id: string;
  caption?: string | null;
  target: string[] | [];
};

export type SemanticModel = {
  nodes: Node[];
  links: Link[];
  metadata?: string;
};
