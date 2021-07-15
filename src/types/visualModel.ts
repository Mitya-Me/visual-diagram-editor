export type nodeVisual = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

export type linkVisual = {
  id: string;
  type: string; // basic wavy dashed
};

export type VisualModel = {
  nodesVisualizations: nodeVisual[],
  linksVisualizations: linkVisual[],
};
