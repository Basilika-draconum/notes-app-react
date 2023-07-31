import React from "react";
import "../../styles/Tables.css";
import { Note } from "../../typescript/typescriptTypes";
import { getNotes } from "../../redux/notes/notesSelector";
import { useSelector } from "react-redux";

const TableCount: React.FC = () => {
  const notes = useSelector(getNotes);

  const countNotes = (arr: Note[], str: string, category: string): number => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].status === str && arr[i].category === category) {
        count++;
      }
    }
    return count;
  };
  let countTaskActive = countNotes(notes, "active", "Task");
  let countTaskArchived = countNotes(notes, "archived", "Task");
  let countIdeaActive = countNotes(notes, "active", "Idea");
  let countIdeaArchived = countNotes(notes, "archived", "Idea");
  let countRandomActive = countNotes(notes, "active", "Random thought");
  let countRandomArchived = countNotes(notes, "archived", "Random thought");

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
          <td>{countTaskActive}</td>
          <td>{countTaskArchived}</td>
        </tr>
        <tr className="table-row table-row-list">
          <td>Idea</td>
          <td>{countIdeaActive}</td>
          <td>{countIdeaArchived}</td>
        </tr>
        <tr className="table-row table-row-list">
          <td>Random thought</td>
          <td>{countRandomActive}</td>
          <td>{countRandomArchived}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCount;
