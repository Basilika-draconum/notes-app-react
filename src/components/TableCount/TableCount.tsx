import React from "react";
import { Note } from "../../types/typescriptTypes";
import { getNotes } from "../../redux/notes/notesSelector";
import { useSelector } from "react-redux";
import "../../styles/Tables.css";

const TableCount: React.FC = () => {
  const notes = useSelector(getNotes);
  const notesTask = notes.filter(item => item.category === "Task")
  const notesRandom = notes.filter(item =>item.category!=="Task" )
  const countNotes = (arr: Note[], bool: boolean, ): number => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].status === bool) {
        count++;
      }
    }
    return count;
  };

  return (
    <table className="table">
      <thead className="table-head">
        <tr className="table-head-row">
          <td className="table-head-item">Note category</td>
          <td className="table-head-item">Active</td>
          <td className="table-head-item">Archived</td>
        </tr>
      </thead>
      <tbody id="count-table">
        <tr className="table-row table-row-list">
          <td>Task</td>
          <td>{countNotes(notesTask,true)}</td>
          <td>{countNotes(notesTask,false)}</td>
        </tr>
        <tr className="table-row table-row-list">
          <td>Random thought</td>
          <td>{countNotes(notesRandom,true)}</td>
          <td>{countNotes(notesRandom,false)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCount;
