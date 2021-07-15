import React, { FC } from 'react';

import { SemanticModel } from '../../types/semanticModel';

type LayoutProps = {
  semanticModel: SemanticModel[];
};

const Layout: FC = () => (
  <div />
);

export default Layout;

// //1
// semanticModel.nodes.length;
// ("размеры редактора всегда на всю ширину и длину своего контейнера");
// ("как и нужно ли задавать дефолтные размеры элементам");
// ("какие правила переноса/начала очередного ряда ");

// //nodes default sizes:
// //задаём размеры исходя из количества текствого содержимого в metadata
// const getMetadataLength = (metadata) => {
//     Object.values(metadata).map((el) => (i += el.length));
// };
