import React, {useState} from 'react';
import './styles/App.css';
import TableActive from './components/TableActive/TableActive';
import TableCount from './components/TableCount/TableCount';
import TableArchive from './components/TableArchive/TableArchive';
import {Note} from "./typescript/typescriptTypes"

const App: React.FC = () => {
  const [notes, setNotes] = useState <Note[]>([{
      id: "1",
      name: "Shopping List",
      category: "Task",
      content: "1. Milk 2. Eggs 3. Bread",
      created_at: "September 20, 2023",
      status: "active",
      dates: "",
    },
    {
      id: "2",
      name: "Meeting Notes",
      category: "Random thought",
      content: "Discussed project timeline and assigned tasks to team members.",
      created_at: "May 09, 2023",
      status: "active",
      dates: "",
    },
    {
      id: "3",
      name: "Ideas for Vacation",
      category: "Idea",
      content: "Implement new ideas for presentation",
      created_at: "June 23, 2023",
      status: "active",
      dates: "",
    },
    {
      id: "4",
      name: "William Gaddis",
      category: "Random thought",
      content: "Visit the Grand Canyon and relax on a beach in Hawaii",
      created_at: "July 05, 2023",
      status: "active",
      dates: "",
    },
    {
      id: "5",
      name: "Books",
      category: "Task",
      content: "The lean startup",
      created_at: "July 28, 2023",
      status: "active",
      dates: "",
    },
    {
      id: "6",
      name: "Interesting task",
      category: "Task",
      content:
        "I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
      created_at: "July 28, 2023",
      status: "active",
      dates: "3/5/2021,5/5/2021",
    },
    {
      id: "7",
      name: "Start bussiness",
      category: "Idea",
      content: "Find investors and new developers, build new office",
      created_at: "May 12, 2023",
      status: "active",
      dates: "",
    },
    {
      id: "8",
      name: "English",
      category: "Random thought",
      content: "Learn grammar and new words",
      created_at: "July 05, 2022",
      status: "archived",
      dates: "",
    },
  ]);
  const getActiveNotes = () => {
     const result = notes.filter ((note) => note.status === "active"
     );
    return result;
  }
  const getArchiveNotes = () => {
     const result = notes.filter ((note) => note.status === "archived"
     );
    return result;
  }
  console.log(setNotes)
  return (
    <main className="App">
      <div className="container">
        <h1>Hello, it's my notes</h1>
        <TableActive notes={getActiveNotes() } />
        <TableCount />
        <TableArchive notes={getArchiveNotes() }/>
      </div>
      
    </main>
  );
}

export default App;

