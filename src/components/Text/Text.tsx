import React from 'react';

type TextProps = {
  x: string;
  y: string;
  fontFamily: string;
  text: string;
};

const Text: React.FC<TextProps> = ({
  x, y, fontFamily, text,
}) => (
  <text x={x} y={y} fontFamily={fontFamily}>{text}</text>
);

export default Text;
