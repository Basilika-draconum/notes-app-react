export interface Note {
  id: string;
  name: string;
  category: string;
  content: string;
  created_at: string;
  status: string;
  dates: string;
}

export interface NotesListProps {
  notes: Note[];
}
export interface NoteProps {
  note: Note;
}
export interface ModalProps {
  onClose: ()=>void;
}
