import { createSlice } from "@reduxjs/toolkit";
import {
  // answersWord,
  // getAllCategories,
  // getAllWord,
  getRecommendBooks,
  getOwnBooks,
  addBooks,
  removeBooks,
  // ownWord,
  // statisticsWords,
  // tasksWords,
} from "./data-operation";

const initialState = {
  recommendedBooks: [],
  isLoadingRecommended: false,
  ownBooks: [],
  isLoadingOwn: false,
  isAddBook: false,
  isDeleteBook: false,

  // statistics: [],
  // isLoadingStatistics: false,
  // words: [],
  // isLoadingWords: false,
  // allWords: [],
  // isLoadingAllWords: false,
  // tasks: [],
  // isLoadingTasks: false,
  // answers: [],
  // isLoadingAnswers: false,
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

// const handleGetStatisticsWordPending = (state, { payload }) => {
//   state.isLoadingStatistics = true;
// };
// const handleGetStatisticsWordFulfilled = (state, { payload }) => {
//   state.statistics = payload;
//   state.isLoadingStatistics = false;
// };

// const handleGetOwnWordPending = (state, { payload }) => {
//   state.isLoadingWords = true;
// };
// const handleGetOwnWordFulfilled = (state, { payload }) => {
//   state.words = payload;
//   state.isLoadingWords = false;
// };
// const handleGetOwnWordRejected = (state, { payload }) => {
//   state.isLoadingWords = true;
// };

// const handlegetAllWordsPending = (state, { payload }) => {
//   state.isLoadingAllWords = true;
// };
// const handlegetAllWords = (state, { payload }) => {
//   state.allWords = payload;
//   state.isLoadingAllWords = false;
// };

// const handTasksWordsPending = (state, { payload }) => {
//   state.isLoadingTasks = true;
// };
// const handTasksWords = (state, { payload }) => {
//   state.tasks = payload;
//   state.isLoadingTasks = false;
// };

// const handleAnswersPending = (state, { payload }) => {
//   state.isLoadingAnswers = true;
// };
// const handleAnswers = (state, { payload }) => {
//   state.answers = payload;
//   state.isLoadingAnswers = false;
// };

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
    // .addCase(statisticsWords.fulfilled, handleGetStatisticsWordFulfilled)
    // .addCase(ownWord.pending, handleGetOwnWordPending)
    // .addCase(ownWord.fulfilled, handleGetOwnWordFulfilled)
    // .addCase(ownWord.rejected, handleGetOwnWordRejected)
    // .addCase(getAllWord.pending, handlegetAllWordsPending)
    // .addCase(getAllWord.fulfilled, handlegetAllWords)
    // .addCase(tasksWords.pending, handTasksWordsPending)
    // .addCase(tasksWords.fulfilled, handTasksWords)
    // .addCase(answersWord.pending, handleAnswersPending)
    // .addCase(answersWord.fulfilled, handleAnswers);
  },
});

export default dataSlise.reducer;
