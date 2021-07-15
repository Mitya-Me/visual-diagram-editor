import React, { FC, ReactNode, useRef } from 'react';

import { SemanticModel } from '../../types/semanticModel';
import { VisualModel } from '../../types/visualModel';

type DiagramEditorProps = {
  semanticModel?: SemanticModel;
  visualModel?: VisualModel;
  nodeComponents?: JSX.Element[];
  linkComponents?: JSX.Element[];
  // onChange(semanticModel: SemanticModel, visualModel: VisualModel): void;
  text: string;
};

const DiagramEditor: FC<DiagramEditorProps> = ({ text }) => {
  //   return props.visualModel ? props.visualModel : layout(props.semanticModel)

  const splitIntoLines = (t: any): any => {
    if (t.length > 20) {
      const arr = [];
      for (let i = 0; i <= t.length; i += 10) {
        arr.push(t.slice(i, i + 10));
      }
      return arr;
    }
    return console.log('missed');
  };

  return (
    <svg height="100" width="200" style={{ border: '1px solid green' }}>
      <text x="20" y="20">
        {splitIntoLines(text).map((el: any, index: number) => <tspan x="20" y={index * 15}> {el} </tspan>)}
      </text>
    </svg>
  );
};

export default DiagramEditor;
