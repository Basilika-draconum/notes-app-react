export interface Note {
  id: string;
  name: string;
  category: string;
  content: string;
  created_at: string;
  status: string;
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
  onClose: ()=>void;
}

export interface NoteFormState {
  name: string;
  category: string;
  content: string;
}