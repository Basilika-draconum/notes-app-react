import React from "react";
import { ReactComponent as Archive } from "../../images/archive.svg";
import { ReactComponent as Delete } from "../../images/delete.svg";
import "../../styles/Tables.css";
import useModal from "../../hooks/useModal";
import Modal from "../Modal/Modal";
import TableActiveRow from "./TableActiveRow";
import { useSelector } from "react-redux";
import { getNotes } from "../../redux/notes/notesSelector";

const TableActive: React.FC = () => {
  const { isModalOpen, setIsModalOpen } = useModal({ styles: "show" });
  
  const notes = useSelector(getNotes);

  const getActiveNotes = () => {
    const result = notes.filter((note) => note.status === "active");
    return result;
  };
  const activeNotes = getActiveNotes();

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
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
        <button type="button" className="btn-create create" onClick={openModal}>
          Create Note
        </button>
      </div>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default TableActive;
