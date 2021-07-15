import React, { FC } from 'react';

type CircleProps = {
  r: string;
  style?: any;
  fill: string;
  strokeWidth: string;
  stroke: string;
  cx: number;
  cy: number;
};

const Circle: FC<CircleProps> = ({
  r,
  style,
  fill,
  strokeWidth,
  stroke,
  cx,
  cy,
}: CircleProps) => (
  <circle
    r={r}
    style={style}
    fill={fill}
    strokeWidth={strokeWidth}
    stroke={stroke}
    cx={cx}
    cy={cy}
  />
);

export default Circle;
