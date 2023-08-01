import React from "react";
import { NoteProps } from "../../typescript/typescriptTypes";
import {ReactComponent as Archive} from "../../images/archive.svg"

const TableArchiveRow: React.FC<NoteProps> = ({ note }) => {
  return (
    <tr className="table-row table-row-archived" id={note.id}>
      <td id="list-name">{note.name}</td>
      <td>{note.created_at}</td>
      <td>{note.category}</td>
      <td>{note.content}</td>
      <td>{note.dates}</td>
      <td>
        <button
          className="btn btn-icons btn-archive"
          data-action="unarchive"
          data-id={note.id}
        ><Archive width={22} height={22}/></button>
      </td>
    </tr>
  );
};

export default TableArchiveRow;
