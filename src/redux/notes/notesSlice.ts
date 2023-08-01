import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit";
import { NotesList, Note } from "../../typescript/typescriptTypes";
import { produce } from "immer";
const initialState: NotesList = {
  notes: [
    {
      id: "1",
      name: "Shopping List",
      category: "Task",
      content: "1. Milk 2. Eggs 3. Bread",
      created_at: "September 20, 2023",
      status: true,
      dates: "",
    },
    {
      id: "2",
      name: "Meeting Notes",
      category: "Random thought",
      content: "Discussed project timeline and assigned tasks to team members.",
      created_at: "May 09, 2023",
      status: true,
      dates: "",
    },
    {
      id: "3",
      name: "Ideas for Vacation",
      category: "Idea",
      content: "Implement new ideas for presentation",
      created_at: "June 23, 2023",
      status: true,
      dates: "",
    },
    {
      id: "4",
      name: "William Gaddis",
      category: "Random thought",
      content: "Visit the Grand Canyon and relax on a beach in Hawaii",
      created_at: "July 05, 2023",
      status: true,
      dates: "",
    },
    {
      id: "5",
      name: "Books",
      category: "Task",
      content: "The lean startup",
      created_at: "July 28, 2023",
      status: true,
      dates: "",
    },
    {
      id: "6",
      name: "Interesting task",
      category: "Task",
      content:
        "I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
      created_at: "July 28, 2023",
      status: true,
      dates: "3/5/2021,5/5/2021",
    },
    {
      id: "7",
      name: "Start bussiness",
      category: "Idea",
      content: "Find investors and new developers, build new office",
      created_at: "May 12, 2023",
      status: true,
      dates: "",
    },
    {
      id: "8",
      name: "English",
      category: "Random thought",
      content: "Learn grammar and new words",
      created_at: "July 05, 2022",
      status: false,
      dates: "",
    },
  ],
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<Note>) {
      return produce(state, (draftState: Draft<NotesList>) => {
        draftState.notes.push(action.payload);
      });
    },
    deleteNote(state, action: PayloadAction<string>) {
      return produce(state, (draftState: Draft<NotesList>) => {
        const noteIdToDelete = action.payload;
        draftState.notes = draftState.notes.filter(
          (note) => note.id !== noteIdToDelete
        );
      });
    },
    toggleStatusNote(state, action: PayloadAction<string>) {
      const noteToUpdateStatus = state.notes.find(
        (note) => note.id === action.payload
      );
      if (noteToUpdateStatus) {
        noteToUpdateStatus.status = !noteToUpdateStatus.status;
      }
      },
      editNote(state, action: PayloadAction<Note>) {
        const {id, name, category, content, dates } = action.payload;
      const noteToUpdate = state.notes.find((note) => note.id === id);

      if (noteToUpdate) {
        noteToUpdate.name = name;
        noteToUpdate.category = category;
        noteToUpdate.content = content;
        noteToUpdate.dates = dates;
      }
    }
  },
});

export const { deleteNote, addNote, toggleStatusNote, editNote} = noteSlice.actions;
export const notesReducer = noteSlice.reducer;
