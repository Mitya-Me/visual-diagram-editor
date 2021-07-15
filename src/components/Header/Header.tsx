import React, { FC } from 'react';

const Header: FC = () => {
  const options = [
    {
      id: 11, key: 1, value: 'first', label: 'Visualizator #1',
    },
    {
      id: 22, key: 2, value: 'second', label: 'Visualizator #2',
    },
    {
      id: 33, key: 3, value: 'third', label: 'Visualizator #3',
    },
  ];
  return (
    <div>
      HEADER
    </div>
  );
};

export default Header;
