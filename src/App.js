import React from 'react';

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import ListaBotones from './components/ListaBotones';

function App() {
  return (
      <>
        <div className="app">
          <Sidebar />
          <main className='main'>
            <Header />
            <div className="todo">
              <ListaBotones />
            </div>
          </main>
        </div>
      </>
  );
}

export default App;
