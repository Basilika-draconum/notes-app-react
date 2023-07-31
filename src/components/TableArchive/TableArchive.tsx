import React from "react";
import { ReactComponent as Archive } from "../../images/archive.svg";
import "../../styles/Tables.css";
import { NotesListProps } from "../../typescript/typescriptTypes";
import TableArchiveRow from "./TableArchiveRow";

const TableArchive: React.FC<NotesListProps> = ({ notes }) => {
  return (
    <>
      <h2 className="table-head-row">Archived notes</h2>
      <table className="table">
        <thead className="table-head">
          <tr className="table-head-row">
            <td className="table-head-item">Name</td>
            <td className="table-head-item">Created</td>
            <td className="table-head-item">Category</td>
            <td className="table-head-item">Content</td>
            <td className="table-head-item">Dates</td>
            <td className="table-head-item icon">
              <Archive width={26} height={26} />
            </td>
          </tr>
        </thead>
        <tbody className="table-archived">
          {notes.map((note) => (
            <TableArchiveRow key={note.id} note={note} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableArchive;
