import { configureStore } from '@reduxjs/toolkit'
import { notesReducer } from "./notes/notesSlice";
import { modalReducer } from './modal/modalSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    modal:modalReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch