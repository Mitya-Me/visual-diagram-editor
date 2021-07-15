import { SemanticModel } from '../types/semanticModel';

const mockSemantic: SemanticModel = {
  nodes: [
    {
      id: '1',
      type: 'rect',
      metadata: {
        title: 'Node #1',
        subtitle: 'subtitle #1',
      },
    },
    {
      id: '2',
      type: 'rect',
      metadata: {
        title: 'Node #2',
        subtitle: 'subtitle #2',
      },
    },
    {
      id: '3',
      type: 'rect',
      metadata: {
        title: 'Node #3',
        subtitle: 'subtitle #3',
      },
    },
    {
      id: '4',
      type: 'rect',
      metadata: {
        title: 'Node #4',
        subtitle: 'subtitle #4',
      },
    },
  ],

  links: [
    {
      id: '1',
      target: ['2', '3'],
    },
    {
      id: '2',
      target: ['3'],
    },
    {
      id: '3',
      target: ['1'],
    },
    {
      id: '4',
      target: [],
    },
  ],

  metadata: '“I DOOM… destroyer of worlds… What gods dare stand against me?”',
};

export default mockSemantic;
