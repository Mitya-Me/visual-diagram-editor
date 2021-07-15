import React from 'react';

type RectProps = {
  height: string;
  width: string;
  x: number;
  y: number;
  fill: string;
};

const Rect: React.FC<RectProps> = ({
  height, width, x, y, fill,
}: RectProps) => (
  <rect width={width} height={height} x={x} y={y} fill={fill} />
);

export default Rect;
