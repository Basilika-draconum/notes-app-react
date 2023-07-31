import React from 'react';
import { ReactComponent as Close } from "../../images/cross.svg";
import "../../styles/Modal.css"
import {ModalProps} from "../../typescript/typescriptTypes"


const Modal : React.FC<ModalProps> = ({ onClose }) => {
  
  return (
    <div className="popup-wrapper" id='modal'>
      <div className="popup">
        <div className="content">
          <p className="popup-title">Create new note!</p>
          <button className="btn cross" onClick={onClose}>
            <Close/>
          </button>
          <form className="form" id="modal-form">
            <div className="row">
              <label>Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="row category">
              <p>Category</p>
              <select id="options">
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
              <input type="content" name="content" id="content" />
            </div>
            <div className="row">
              <label>Dates</label>
              <input type="dates" name="dates" id="dates" disabled/>
            </div>
            <div className="wrapper-btn-create">
              <button type="submit" className="btn-create add">Create note</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal
