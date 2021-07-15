import React, { FC } from 'react';

type LineProps = {
  x1: string;
  y1: string;
  x2: string;
  y2: string;
  stroke: string;
  strokeWidth: string;
};

const Line: FC<LineProps> = ({
  x1, y1, x2, y2, stroke, strokeWidth,
}) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth={strokeWidth} />
);

export default Line;
