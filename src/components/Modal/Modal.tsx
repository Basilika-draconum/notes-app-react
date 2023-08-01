import React, { useState, ChangeEvent, useEffect } from "react";
import { ReactComponent as Close } from "../../images/cross.svg";
import "../../styles/Modal.css";
import {
  ModalProps,
  Note,
  NoteFormState,
} from "../../typescript/typescriptTypes";
import { useDispatch, useSelector } from "react-redux";
import { addNote, editNote } from "../../redux/notes/notesSlice";
import { toggleModal } from "../../redux/modal/modalSelector";
import { closeModal } from "../../redux/modal/modalSlice";
import { getNotes } from "../../redux/notes/notesSelector";
import { RootState } from "../../redux/store";

const initialNoteFormState: NoteFormState = {
  name: "",
  category: "",
  content: "",
};
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dateRegex = /\b(0?[1-9]|1[0-2])\/(0?[1-9]|[12]\d|3[01])\/\d{4}\b/g;

const Modal: React.FC<ModalProps> = () => {
  const initialNote = useSelector((state: RootState) => {
    const selectedId = state.modal.id;
    if (!selectedId) {
      return null;
    }
    return getNotes(state).find(({ id }) => selectedId === id);
  });

  const [noteFormState, setNoteFormState] = useState<NoteFormState>(
    initialNote ? initialNote : initialNoteFormState
  );

  const { name, category, content } = noteFormState;
  const dispatch = useDispatch();
  const closeModalForm = () => {
    dispatch(closeModal());
  };
  useEffect(() => {
    if (initialNote) {
      setNoteFormState(initialNote);
    }
  }, [initialNote]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNoteFormState((prevNoteFormState) => ({
      ...prevNoteFormState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    let noteDates = noteFormState.content.match(dateRegex) || "";

    if (initialNote) {
      const updatedNote: Note = {
        ...initialNote,
        name: noteFormState.name,
        category: noteFormState.category,
        content: noteFormState.content,
        dates: noteDates,
      };
      dispatch(editNote(updatedNote));
    } else {
      let dateObj = new Date();
      let month = months[dateObj.getMonth()];
      let day = dateObj.getDate();
      let year = dateObj.getFullYear();

      const newNote: Note = {
        id: String(Date.now()),
        name: noteFormState.name,
        category: noteFormState.category,
        content: noteFormState.content,
        created_at: `${month} ${day},${year}`,
        status: true,
        dates: noteDates,
      };
      dispatch(addNote(newNote));
    }
    setNoteFormState(initialNoteFormState);
    closeModalForm();
  };
  const isOpen = useSelector(toggleModal);

  return (
    <div className={`popup-wrapper ${isOpen && "show"}`}>
      <div className="popup">
        <div className="content">
          <p className="popup-title">
            {initialNote ? "Edit Note" : "Create New Note"}
          </p>
          <button className="btn cross" onClick={closeModalForm}>
            <Close />
          </button>
          <form className="form" id="modal-form" onSubmit={handleFormSubmit}>
            <div className="row">
              <label>Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="row category">
              <p>Category</p>
              <select
                id="options"
                name="category"
                value={category}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Choose category
                </option>
                <option value="Task">Task</option>
                <option value="Idea">Idea</option>
                <option value="Random thought">Random Thought</option>
              </select>
            </div>
            <div className="row">
              <label>Content</label>
              <input
                type="content"
                name="content"
                id="content"
                value={content}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <label>Dates</label>
              <input type="dates" name="dates" id="dates" disabled />
            </div>
            <div className="wrapper-btn-create">
              <button type="submit" className="btn-create add">
                {initialNote ? "Save Changes" : "Add Note"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
