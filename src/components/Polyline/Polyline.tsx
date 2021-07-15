import React, { FC } from 'react';

type PolylineProps = {
  leftTopX: string;
  leftTopY: string;
  rightTopX: string;
  rightTopY: string;
  rightBottomX: string;
  rightBottomY: string;
  leftBottomX: string;
  leftBottomY: string;
  points: string;
  stroke: string;
  strokeWidth: string;
  fill: string;
};

const Polyline: FC<PolylineProps> = ({
  points, stroke, strokeWidth, fill,
}) => (
  <polyline
    stroke={stroke}
    strokeWidth={strokeWidth}
    fill={fill}
    points={points}
  />
);

export default Polyline;
