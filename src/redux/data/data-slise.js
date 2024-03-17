import { createSlice } from "@reduxjs/toolkit";
import {
  answersWord,
  getAllCategories,
  getAllWord,
  ownWord,
  statisticsWords,
  tasksWords,
} from "./data-operation";

const initialState = {
  categories: [],
  isLoadingCategories: false,
  statistics: [],
  isLoadingStatistics: false,
  words: [],
  isLoadingWords: false,
  allWords: [],
  isLoadingAllWords: false,
  tasks: [],
  isLoadingTasks: false,
  answers: [],
  isLoadingAnswers: false,
};

const handleGetAllCategoriesPending = (state, { payload }) => {
  state.isLoadingCategories = true;
};

const handleGetAllCategoriesulfilled = (state, { payload }) => {
  state.categories = payload;
  state.isLoadingCategories = false;
};

const handleGetStatisticsWordPending = (state, { payload }) => {
  state.isLoadingStatistics = true;
};
const handleGetStatisticsWordFulfilled = (state, { payload }) => {
  state.statistics = payload;
  state.isLoadingStatistics = false;
};

const handleGetOwnWordPending = (state, { payload }) => {
  state.isLoadingWords = true;
};
const handleGetOwnWordFulfilled = (state, { payload }) => {
  state.words = payload;
  state.isLoadingWords = false;
};
const handleGetOwnWordRejected = (state, { payload }) => {
  state.isLoadingWords = true;
};

const handlegetAllWordsPending = (state, { payload }) => {
  state.isLoadingAllWords = true;
};
const handlegetAllWords = (state, { payload }) => {
  state.allWords = payload;
  state.isLoadingAllWords = false;
};

const handTasksWordsPending = (state, { payload }) => {
  state.isLoadingTasks = true;
};
const handTasksWords = (state, { payload }) => {
  state.tasks = payload;
  state.isLoadingTasks = false;
};

const handleAnswersPending = (state, { payload }) => {
  state.isLoadingAnswers = true;
};
const handleAnswers = (state, { payload }) => {
  state.answers = payload;
  state.isLoadingAnswers = false;
};

const dataSlise = createSlice({
  name: "data",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, handleGetAllCategoriesPending)
      .addCase(getAllCategories.fulfilled, handleGetAllCategoriesulfilled)
      .addCase(statisticsWords.pending, handleGetStatisticsWordPending)
      .addCase(statisticsWords.fulfilled, handleGetStatisticsWordFulfilled)
      .addCase(ownWord.pending, handleGetOwnWordPending)
      .addCase(ownWord.fulfilled, handleGetOwnWordFulfilled)
      .addCase(ownWord.rejected, handleGetOwnWordRejected)
      .addCase(getAllWord.pending, handlegetAllWordsPending)
      .addCase(getAllWord.fulfilled, handlegetAllWords)
      .addCase(tasksWords.pending, handTasksWordsPending)
      .addCase(tasksWords.fulfilled, handTasksWords)
      .addCase(answersWord.pending, handleAnswersPending)
      .addCase(answersWord.fulfilled, handleAnswers);
  },
});

export default dataSlise.reducer;
