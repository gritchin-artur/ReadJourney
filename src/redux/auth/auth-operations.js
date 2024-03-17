import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { token } from "../../api/axiosSettings";
import toast from "react-hot-toast";

const register = createAsyncThunk(
  "/users/signup",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      toast.success(`Hello ${credentials.name}`);
      return data;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return toast.error("Email or password invalid");
      }
      if (error.response && error.response.status === 409) {
        return toast.error("Such email already exists");
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

const logIn = createAsyncThunk("auth/signin", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/signin", credentials);
    token.set(data.token);
    toast.success(`Hello ${data.name}`);
    return data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      return toast.error("Email or password invalid");
    }
    if (error.response && error.response.status === 401) {
      return toast.error("Email or password invalid");
    }
    if (error.response && error.response.status === 404) {
      return toast.error("Service not found");
    }
    if (error.response && error.response.status === 500) {
      return toast.error("Server error");
    }
  }
});

const logOut = createAsyncThunk("auth/signout", async (_, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/signout");
    token.unset();
    toast.success(`Buy`);
    return data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return toast.error("Service not found");
    }
    if (error.response && error.response.status === 500) {
      return toast.error("Server error");
    }
  }
});

const fetchCurrentUser = createAsyncThunk(
  "users/current",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue(null);
    }
    try {
      token.set(persistedToken);
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(null);
    }
  }
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default authOperations;
