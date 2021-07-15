import { VisualModel } from '../types/visualModel';

const mockVisual: VisualModel = {
  nodesVisualizations: [
    {
      id: '1',
      x: 50,
      y: 50,
      width: 100,
      height: 100,
    },
    {
      id: '2',
      x: 160,
      y: 50,
      width: 100,
      height: 100,
    },
    {
      id: '3',
      x: 270,
      y: 50,
      width: 100,
      height: 100,
    },
    {
      id: '4',
      x: 390,
      y: 50,
      width: 100,
      height: 100,
    },
  ],

  linksVisualizations: [
    {
      id: '1',
      type: 'basic',
    },
    {
      id: '2',
      type: 'wavy',
    },
    {
      id: '3',
      type: 'dashed',
    },
    {
      id: '4',
      type: 'basic',
    },
  ],

};

export default mockVisual;
