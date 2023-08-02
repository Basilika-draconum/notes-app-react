import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../../redux/notes/notesSelector";
import { openModal } from "../../redux/modal/modalSlice";
import TableActiveRow from "./TableActiveRow";

import { ReactComponent as Archive } from "../../images/archive.svg";
import { ReactComponent as Delete } from "../../images/delete.svg";
import "../../styles/Tables.css";

const TableActive: React.FC = () => {
  // const { isModalOpen, setIsModalOpen } = useModal({ styles: "show" });
  const dispatch = useDispatch();
  const notes = useSelector(getNotes);

  const getActiveNotes = () => {
    const result = notes.filter((note) => note.status === true);
    return result;
  };
  const activeNotes = getActiveNotes();

  const openModalForm = () => {
    dispatch(openModal(null));
  };
  return (
    <div>
      <h2 className="table-head-row">Active notes</h2>
      <table className="table">
        <thead className="table-head">
          <tr className="table-head-row">
            <td className="table-head-item">Name</td>
            <td className="table-head-item">Created</td>
            <td className="table-head-item">Category</td>
            <td className="table-head-item">Content</td>
            <td className="table-head-item">Dates</td>
            <td className="table-head-item icon"></td>
            <td className="table-head-item icon">
              <Archive width={26} height={26} />
            </td>
            <td className="table-head-item icon">
              <Delete width={26} height={26} />
            </td>
          </tr>
        </thead>
        <tbody className="table-active">
          {activeNotes.map((note) => (
            <TableActiveRow key={note.id} note={note} />
          ))}
        </tbody>
      </table>
      <div className="wrapper-btn-create">
        <button
          type="button"
          className="btn-create create"
          onClick={openModalForm}
        >
          Create Note
        </button>
      </div>
    </div>
  );
};

export default TableActive;
