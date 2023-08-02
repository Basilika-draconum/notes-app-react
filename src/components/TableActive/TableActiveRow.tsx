import React from "react";
import { useDispatch } from "react-redux";
import { NoteProps } from "../../types/typescriptTypes";
import { deleteNote, toggleStatusNote } from "../../redux/notes/notesSlice";
import { openModal } from "../../redux/modal/modalSlice";

import { ReactComponent as Archive } from "../../images/archive.svg";
import { ReactComponent as Delete } from "../../images/delete.svg";
import { ReactComponent as Edit } from "../../images/edit.svg";

const TableActiveRow: React.FC<NoteProps> = ({ note }) => {
  const dispatch = useDispatch();
  const handleDeleteNote = () => dispatch(deleteNote(note.id));
  const handleChangeStatusNote = () => dispatch(toggleStatusNote(note.id));
  const handleEditNote = () => {
    dispatch(openModal(note.id));
  };
  return (
    <tr className="table-row table-row-active" id={note.id}>
      <td>{note.name}</td>
      <td>{note.created_at}</td>
      <td>{note.category}</td>
      <td>{note.content}</td>
      <td>{note.dates}</td>
      <td>
        <button className="btn btn-icons btn-edit" onClick={handleEditNote}>
          <Edit width={16} height={16} />
        </button>
      </td>
      <td>
        <button
          className="btn btn-icons btn-archive"
          onClick={handleChangeStatusNote}
        >
          <Archive width={22} height={22} />
        </button>
      </td>
      <td>
        <button className="btn btn-icons btn-delete" onClick={handleDeleteNote}>
          <Delete width={22} height={22} />
        </button>
      </td>
    </tr>
  );
};

export default TableActiveRow;
