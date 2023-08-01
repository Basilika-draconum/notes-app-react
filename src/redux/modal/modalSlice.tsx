import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalState} from "../../typescript/typescriptTypes";

const initialState: ModalState = {
  isOpen: false,
  id: null,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<string | null>) {
      state.isOpen = true;
      state.id = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.id = null;
    },
  },
});
export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
