export interface Note {
  id: string;
  name: string;
  category: string;
  content: string;
  created_at: string;
  status: boolean;
  dates: string[]|string;
}

export interface NotesList {
  notes: Note[];
}
export interface NotesListState {
  notes: Note[];
  isLoading: boolean,
  error:null|string,
}
export interface NoteProps {
  note: Note;
}
export interface ModalProps {
  initialNote?: Note;
}

export interface NoteFormState {
  name: string;
  category: string;
  content: string;
}

export interface ModalState {
  isOpen: boolean;
  id: string | null;
}