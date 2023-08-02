import React from "react";
import { useDispatch } from "react-redux";
import { toggleStatusNote } from "../../redux/notes/notesSlice";
import { NoteProps } from "../../types/typescriptTypes";

import { ReactComponent as Archive } from "../../images/archive.svg";

const TableArchiveRow: React.FC<NoteProps> = ({ note }) => {
  const dispatch = useDispatch();
  const handleChangeStatusNote = () => dispatch(toggleStatusNote(note.id));
  return (
    <tr className="table-row table-row-archived" id={note.id}>
      <td>{note.name}</td>
      <td>{note.created_at}</td>
      <td>{note.category}</td>
      <td>{note.content}</td>
      <td>{note.dates}</td>
      <td>
        <button
          className="btn btn-icons btn-archive"
          onClick={handleChangeStatusNote}
        >
          <Archive width={22} height={22} />
        </button>
      </td>
    </tr>
  );
};

export default TableArchiveRow;
