import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalOpenMobile: false,
    isModalOpenBook: false,
    bookContent: [],
    isModalOpenFinishRead: false
  },
  reducers: {
    openModalMobile: (state) => {
      state.isModalOpenMobile = true;
    },
    closeModalMobile: (state) => {
      state.isModalOpenMobile = false;
    },
    openModalBook: (state, action) => {
      state.isModalOpenBook = true;
      state.bookContent = action.payload;
    },
    closeModalBook: (state) => {
      state.isModalOpenBook = false;
    },
        openModalFinishRead: (state) => {
      state.isModalOpenFinishRead = true;
    },
    closeModalFinishRead: (state) => {
      state.isModalOpenFinishRead = false;
    },
  },
});

export const modalReducer = modalSlice.reducer;

export const {
  openModalMobile,
  closeModalMobile,
  openModalBook,
  closeModalBook,
  openModalFinishRead,
  closeModalFinishRead,
} = modalSlice.actions;
