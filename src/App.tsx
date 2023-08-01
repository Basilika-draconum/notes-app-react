import React from 'react';
import './styles/App.css';
import TableActive from './components/TableActive/TableActive';
import TableCount from './components/TableCount/TableCount';
import TableArchive from './components/TableArchive/TableArchive';
import Modal from './components/Modal/Modal';


const App: React.FC = () => {

  return (
    <main className="App">
      <div className="container">
        <h1>Hello, it's my notes</h1>
        <TableActive/>
        <TableCount />
        <TableArchive />
        <Modal />
      </div>
      
    </main>
  );
}

export default App;

