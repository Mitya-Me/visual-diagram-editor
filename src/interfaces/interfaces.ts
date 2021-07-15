// block interface:
export interface ILabel {
  label?: string | Node;
}
export interface IPosition {
  x: number;
  y: number;
}
export interface IBlock {
  id: string;
  type?: string;
  data: ILabel;
  position: IPosition;
}

// interface ISvgRect {
//   width: string;
//   height: string;
//   style?: any;
//   x: string;
//   y: string;
//   fill: string;
// }

// interface ISvgCircle {
//   r: string;
//   style?: any;
//   fill: string;
//   strokeWidth: string;
//   stroke: string;
//   cx: string;
//   cy: string;
// }

export interface IInitBlock {
  id?: string;
  type?: string;
  parentTo?: string[],
  childTo?: null,
  label?: string,
  text?: string,
  svg: any;
}

// for initFigures
export type Figures = Figure[];

export type Figure = {
  x: number;
  y: number;
  width: string;
  height: string;

  fill: string;
  figure: string;

  r: string;
  style: null;
  stroke: string;
  strokeWidth: string;
  cx: number;
  cy: number;

  // id?: string;
  // type?: string;
  // parentTo?: string[] | null;
  // childTo?: string[] | null;
  // label?: string;
  // text?: string;
};
