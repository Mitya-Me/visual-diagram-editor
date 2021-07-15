import React, { FC } from 'react';

import Circle from '../components/Circle/Circle';
import Rect from '../components/Rect/Rect';

/* eslint-disable consistent-return */
const defineShapes = (figure: any): any => {
  const f = figure.svg;

  const lintRec = Object.prototype.hasOwnProperty.call(f, 'r');
  const lintRec2 = Object.prototype.hasOwnProperty.call(f, 'x');

  if (lintRec) {
    return (
      <Circle
        r={f.r}
        style={f.style}
        fill={f.fill}
        strokeWidth={f.strokeWidth}
        stroke={f.stroke}
        cx={f.cx}
        cy={f.cy}
      />
    );
  }

  if (lintRec2) {
    return (
      <Rect
        height={f.height}
        width={f.width}
        x={f.x}
        y={f.y}
        fill={f.fill}
      />
    );
  }

  //  if (figure.svg.hasOwnProperty('r')) {
  //     return (
  //       <Circle
  //         r={f.r}
  //         style={f.style}
  //         fill={f.fill}
  //         strokeWidth={f.strokeWidth}
  //         stroke={f.stroke}
  //         cx={f.cx}
  //         cy={f.cy}
  //       />
  //     );
  //   }

  // if (figure.svg.hasOwnProperty('x')) {
  //   return (
  //     <Rect
  //       height={f.height}
  //       width={f.width}
  //       x={f.x}
  //       y={f.y}
  //       fill={f.fill}
  //     />
  //   );
  // }
};

export default defineShapes;
