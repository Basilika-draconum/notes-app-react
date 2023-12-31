import React from 'react';
import TableActive from './components/TableActive/TableActive';
import TableCount from './components/TableCount/TableCount';
import TableArchive from './components/TableArchive/TableArchive';
import Modal from './components/Modal/Modal';

import './styles/App.css';

const App: React.FC = () => {

  return (
    <main className="App">
      <div className="container">
        <h1>My notes</h1>
        <TableActive/>
        <TableCount />
        <TableArchive />
        <Modal />
      </div>
    </main>
  );
}

export default App;

