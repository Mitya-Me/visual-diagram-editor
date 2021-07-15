import React from 'react';
import axios from 'axios';

import Header from '../Header/Header';
import DiagramEditor from '../DiagramEditor/DiagramEditor';

const App: React.FC = () => {
  const fetchShapesData = async () => {
    const endpoint = 'http://localhost:3000/diagramData';
    const resp = await (axios.get(endpoint));
  };

  fetchShapesData();

  return (
    <div className="app">
      <div className="main">
        <div>
          <div>
            <Header />
          </div>
          <div>
              <div>
                <DiagramEditor text="HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH" />
              </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;
