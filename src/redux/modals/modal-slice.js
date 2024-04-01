import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalOpenMobile: false,
    isModalOpenBook: false,
    bookContent: [],
    // isModalOpenAddWord: false,
    // isModalOpenClickWord: false,
    // isModalOpenConfirmation: false,
    // isModalOpenEdit: false,
    // isModalOpenWellDone: false,
    // clickWordCoordinates: { x: 0, y: 0 },
    // clickWordId: [],
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
    // openModalAddWord: (state) => {
    //   state.isModalOpenAddWord = true;
    // },
    // closeModalAddWord: (state) => {
    //   state.isModalOpenAddWord = false;
    // },
    // openModalClickWord: (state, action) => {
    //   state.isModalOpenClickWord = true;
    //   state.clickWordCoordinates = action.payload;
    //   state.clickWordId = action.payload.wordId;
    // },
    // closeModalClickWord: (state) => {
    //   state.isModalOpenClickWord = false;
    // },
    // openModalConfirmation: (state) => {
    //   state.isModalOpenConfirmation = true;
    // },
    // closeModalConfirmation: (state) => {
    //   state.isModalOpenConfirmation = false;
    // },
    // openModalEdit: (state) => {
    //   state.isModalOpenEdit = true;
    // },
    // closeModalEdil: (state) => {
    //   state.isModalOpenEdit = false;
    // },
    // openModalWellDone: (state) => {
    //   state.isModalOpenWellDone = true;
    // },
    // closeModalWellDone: (state) => {
    //   state.isModalOpenWellDone = false;
    // },
  },
});

export const modalReducer = modalSlice.reducer;

export const {
  openModalMobile,
  closeModalMobile,
  openModalBook,
  closeModalBook,
  // openModalAddWord,
  // closeModalAddWord,
  // openModalClickWord,
  // closeModalClickWord,
  // openModalConfirmation,
  // closeModalConfirmation,
  // openModalEdit,
  // closeModalEdil,
  // openModalWellDone,
  // closeModalWellDone,
} = modalSlice.actions;
