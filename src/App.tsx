import React from 'react';
import './styles/App.css';
import TableActive from './components/TableActive/TableActive';
import TableCount from './components/TableCount/TableCount';
import TableArchive from './components/TableArchive/TableArchive';

const App: React.FC = () => {
  
  return (
    <main className="App">
      <div className="container">
        <h1>Hello, it's my notes</h1>
        <TableActive/>
        <TableCount />
        <TableArchive/>
      </div>
      
    </main>
  );
}

export default App;

