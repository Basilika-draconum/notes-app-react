import { RootState } from './../store';

export const toggleModal = (state:RootState) => state.modal.isOpen;