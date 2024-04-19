import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getRecommendBooks,
  getOwnBooks,
  addBooks,
  removeBooks,
  deleteReadingOfTheBook,
  startReadingBook,
  finishReadingBook,
} from "./data-operation";

const initialState = {
  recommendedBooks: [],
  isLoadingRecommended: false,
  ownBooks: [],
  isLoadingOwn: false,
  isAddBook: false,
  isDeleteBook: false,
isDeleteStatistic: false,
};

const handleGetRecommendedBooksPending = (state, { payload }) => {
  state.isLoadingRecommended = true;
};

const handleGetRecommendedBooksFulfilled = (state, { payload }) => {
  state.recommendedBooks = payload;
  state.isLoadingRecommended = false;
};

const handleGetRecommendedBooksRejected = (state, { payload }) => {
  state.isLoadingRecommended = true;
};

const handleGetOwnBooksPending = (state, { payload }) => {
  state.isLoadingOwn = true;
};

const handleGetOwnBooksFulfilled = (state, { payload }) => {
  state.ownBooks = payload;
  state.isLoadingOwn = false;
};

const handleGetOwnBooksRejected = (state, { payload }) => {
  state.isLoadingOwn = true;
};

const handleAddOwnBooksPending = (state, { payload }) => {
  state.isAddBook = true;
};

const handleAddOwnBooksFulfilled = (state, { payload }) => {
  state.isAddBook = false;
};

const handleAddOwnBooksRejected = (state, { payload }) => {
  state.isAddBook = true;
};

const handleDeleteOwnBooksPending = (state, { payload }) => {
  state.isDeleteBook = true;
};

const handleDeleteOwnBooksFulfilled = (state, { payload }) => {
  state.isDeleteBook = false;
};

const handleDeleteOwnBooksRejected = (state, { payload }) => {
  state.isDeleteBook = true;
};

const handleDeleteStatisticPending = (state, { payload }) => {
  state.isDeleteStatistic = true;
};

const handleDeleteStatisticFulfilled = (state, { payload }) => {
  state.isDeleteStatistic = false;
};

const handleDeleteStatisticRejected = (state, { payload }) => {
  state.isDeleteStatistic = true;
};

const dataSlise = createSlice({
  name: "data",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getRecommendBooks.pending, handleGetRecommendedBooksPending)
      .addCase(getRecommendBooks.fulfilled, handleGetRecommendedBooksFulfilled)
      .addCase(getRecommendBooks.rejected, handleGetRecommendedBooksRejected)
          .addCase(getOwnBooks.pending, handleGetOwnBooksPending)
      .addCase(getOwnBooks.fulfilled, handleGetOwnBooksFulfilled)
      .addCase(getOwnBooks.rejected, handleGetOwnBooksRejected)
              .addCase(addBooks.pending, handleAddOwnBooksPending)
      .addCase(addBooks.fulfilled, handleAddOwnBooksFulfilled)
      .addCase(addBooks.rejected, handleAddOwnBooksRejected)
               .addCase(removeBooks.pending, handleDeleteOwnBooksPending)
      .addCase(removeBooks.fulfilled, handleDeleteOwnBooksFulfilled)
      .addCase(removeBooks.rejected, handleDeleteOwnBooksRejected)
            .addMatcher(
        isAnyOf(
          deleteReadingOfTheBook.pending,
          startReadingBook.pending,
          finishReadingBook.pending
        ),
        handleDeleteStatisticPending
      )
                  .addMatcher(
        isAnyOf(
          deleteReadingOfTheBook.fulfilled,
          startReadingBook.fulfilled,
          finishReadingBook.fulfilled
        ),
        handleDeleteStatisticFulfilled
      )
      .addMatcher(
        isAnyOf(
          deleteReadingOfTheBook.rejected,
          startReadingBook.rejected,
          finishReadingBook.rejected
        ),
        handleDeleteStatisticRejected
      )
        },
});

export default dataSlise.reducer;
