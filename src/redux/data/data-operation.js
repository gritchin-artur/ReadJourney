import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { token } from "../../api/axiosSettings";
import toast from "react-hot-toast";

export const getRecommendBooks = createAsyncThunk(
  "/books/recommend",
  async (params, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    try {
      const response = await axios.get("/books/recommend", { params });
      token.set(persistedToken);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return toast.error("Service not found");
      }
      if (error.response && error.response.status === 500) {
        return toast.error("Server error");
      }
    }
  }
);

export const postAddOwnBook = createAsyncThunk(
  "/books/add",
  async (params, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    try {
      const response = await axios.post("/books/add", params);
      token.set(persistedToken);
      toast.success(`Succsess add to own ${response.data.author}`);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return toast.error("Service not found");
      }
      if (error.response && error.response.status === 500) {
        return toast.error("Server error");
      }
    }
  }
);

export const addBooks = createAsyncThunk(
  "/books/add",
  async (bookId, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    try {
      const response = await axios.post(`/books/add/${bookId}`);
      token.set(persistedToken);
      toast.success(`Succsess add to own ${response.data.author}`);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        return toast.error("The same word you already have!");
      }
      if (error.response && error.response.status === 403) {
        return toast.error("You don't have right to edit this word!");
      }
      if (error.response && error.response.status === 404) {
        return toast.error("Service not found");
      }
      if (error.response && error.response.status === 500) {
        return toast.error("Server error");
      }
    }
  }
);

export const removeBooks = createAsyncThunk(
  "/books/remove",
  async (bookId, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    try {
      const response = await axios.delete(`/books/remove/${bookId}`);
      token.set(persistedToken);
      toast.success(`${response.data.message}`);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        return toast.error("The same word you already have!");
      }
      if (error.response && error.response.status === 403) {
        return toast.error("You don't have right to edit this word!");
      }
      if (error.response && error.response.status === 404) {
        return toast.error("Service not found");
      }
      if (error.response && error.response.status === 500) {
        return toast.error("Server error");
      }
    }
  }
);

export const getOwnBooks = createAsyncThunk(
  "/books/own",
  async (status, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    try {
      const response = await axios.get("/books/own", { status });
      token.set(persistedToken);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return toast.error("Service not found");
      }
      if (error.response && error.response.status === 500) {
        return toast.error("Server error");
      }
    }
  }
);

export const startReadingBook = createAsyncThunk(
  "/books/reading/start",
  async (bookId, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    try {
      const response = await axios.post("/books/reading/start", bookId);
      token.set(persistedToken);
      toast.success(`Start reading ${response.data.author}`);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        return toast.error("This book already read!");
      }
      if (error.response && error.response.status === 403) {
        return toast.error("You don't have right to edit this word!");
      }
      if (error.response && error.response.status === 404) {
        return toast.error("Service not found");
      }
      if (error.response && error.response.status === 500) {
        return toast.error("Server error");
      }
    }
  }
);

export const finishReadingBook = createAsyncThunk(
  "/books/reading/finish",
  async (bookId, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    try {
      const response = await axios.post("/books/reading/finish", bookId);
      token.set(persistedToken);
      toast.success(`Finish reading ${response.data.author}`);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        return toast.error("You haven't started reading this book | This book is already read | The finish page cann't be less than the start page!");
      }
      if (error.response && error.response.status === 403) {
        return toast.error("You don't have right to edit this word!");
      }
      if (error.response && error.response.status === 404) {
        return toast.error("Service not found");
      }
      if (error.response && error.response.status === 500) {
        return toast.error("Server error");
      }
    }
  }
);
