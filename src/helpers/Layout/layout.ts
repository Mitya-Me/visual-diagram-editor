import {Node, SemanticModel} from '../../types/semanticModel'

const setLayout = (data: SemanticModel) => {
  //TODO: fn calсulate width work area
  let displayWidth = 1200;
  let quantityOfNodes = data.nodes.length;
  let coordX = 25;
  let coordY = 25;

  data.nodes.map((node: Node) => {
      if (node.id === '1') {
          node.coordinates = {
              x: coordX,
              y: coordY,
          }
      }

      if (coordX > displayWidth) {
          coordX = 25;
          coordY += 35;
      }

      node.coordinates = {
          x: coordX += 45,
          y: coordY,
      }

  })
};

export default setLayout;
