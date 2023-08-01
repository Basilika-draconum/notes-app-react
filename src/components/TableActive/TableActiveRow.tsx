import React from "react";
import { NoteProps } from "../../typescript/typescriptTypes";
import { ReactComponent as Archive } from "../../images/archive.svg";
import { ReactComponent as Delete } from "../../images/delete.svg";
import { ReactComponent as Edit } from "../../images/edit.svg";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../redux/notes/notesSlice";

const TableActiveRow: React.FC<NoteProps> = ({ note }) => {
  const dispatch = useDispatch()
  const handleDeleteNote = () => dispatch(deleteNote(note.id));


  return (
    <tr className="table-row table-row-active" id={note.id}>
      <td>{note.name}</td>
      <td>{note.created_at}</td>
      <td>{note.category}</td>
      <td>{note.content}</td>
      <td>{note.dates}</td>
      <td>
        <button
          className="btn btn-icons btn-edit"
          data-action="edit"
          data-id={note.id}
        >
          <Edit width={16} height={16} />
        </button>
      </td>
      <td>
        <button
          className="btn btn-icons btn-archive"
          data-action="archive"
          data-id={note.id}
        >
          <Archive width={22} height={22} />
        </button>
      </td>
      <td>
        <button
          className="btn btn-icons btn-delete"
          onClick={handleDeleteNote}
        >
          <Delete width={22} height={22} />
        </button>
      </td>
    </tr>
  );
};

export default TableActiveRow;
