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

export const getOwnBooks = createAsyncThunk(
  "/books/own",
  async (status, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    try {
      const response = await axios.get("/words/own", { status });
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

// export const statisticsWords = createAsyncThunk(
//   "/words/statistics/",
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     try {
//       const response = await axios.get(`/words/statistics`);
//       token.set(persistedToken);
//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.status === 404) {
//         return toast.error("Service not found");
//       }
//       if (error.response && error.response.status === 500) {
//         return toast.error("Server error");
//       }
//     }
//   }
// );

// export const ownWord = createAsyncThunk(
//   "/words/own",
//   async (formData, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;
//     const params = {
//       keyword: formData.filters,
//       category: formData.statistics,
//       isIrregular: formData.isIrregular,
//       page: formData.page,
//       limit: 7,
//     };

//     try {
//       const response = await axios.get("/words/own", { params });
//       token.set(persistedToken);
//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.status === 404) {
//         return toast.error("Service not found");
//       }
//       if (error.response && error.response.status === 500) {
//         return toast.error("Server error");
//       }
//     }
//   }
// );

// export const createWord = createAsyncThunk(
//   "/words/create",
//   async (formData, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     try {
//       const response = await axios.post("/words/create", formData);
//       token.set(persistedToken);
//       toast.success(`Succsess created  ${response.data.en}`);
//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         return toast.error("Such a word exists");
//       }
//       if (error.response && error.response.status === 404) {
//         return toast.error("Service not found");
//       }
//       if (error.response && error.response.status === 500) {
//         return toast.error("Server error");
//       }
//     }
//   }
// );

// export const deleteWord = createAsyncThunk(
//   "/words/delete",
//   async (wordDelete, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     try {
//       const response = await axios.delete(`/words/delete/${wordDelete._id}`);
//       token.set(persistedToken);
//       toast.success(`Succsess delete  ${wordDelete.en}`);
//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         return toast.error("This word not found");
//       }
//       if (error.response && error.response.status === 404) {
//         return toast.error("Service not found");
//       }
//       if (error.response && error.response.status === 500) {
//         return toast.error("Server error");
//       }
//     }
//   }
// );

// export const editWord = createAsyncThunk(
//   "/words/edit",
//   async (wordEdit, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     try {
//       const response = await axios.patch(
//         `/words/edit/${wordEdit.id}`,
//         wordEdit.edit
//       );
//       token.set(persistedToken);
//       toast.success(`Succsess edit  ${wordEdit.en}`);
//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         return toast.error("This word not found");
//       }
//       if (error.response && error.response.status === 403) {
//         return toast.error("You don't have right to edit this word!");
//       }
//       if (error.response && error.response.status === 404) {
//         return toast.error("Service not found");
//       }
//       if (error.response && error.response.status === 500) {
//         return toast.error("Server error");
//       }
//     }
//   }
// );

// export const addWord = createAsyncThunk(
//   "/words/add/",
//   async (wordId, thunkAPI) => {
//     console.log(wordId);
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     try {
//       const response = await axios.post(`/words/add/${wordId}`);
//       token.set(persistedToken);
//       toast.success(`Succsess add to own ${response.data.en}`);
//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.status === 409) {
//         return toast.error("The same word you already have!");
//       }
//       if (error.response && error.response.status === 403) {
//         return toast.error("You don't have right to edit this word!");
//       }
//       if (error.response && error.response.status === 404) {
//         return toast.error("Service not found");
//       }
//       if (error.response && error.response.status === 500) {
//         return toast.error("Server error");
//       }
//     }
//   }
// );

// export const tasksWords = createAsyncThunk(
//   "/words/tasks/",
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     try {
//       const response = await axios.get(`/words/tasks`);
//       token.set(persistedToken);
//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.status === 404) {
//         return toast.error("Service not found");
//       }
//       if (error.response && error.response.status === 500) {
//         return toast.error("Server error");
//       }
//     }
//   }
// );

// export const answersWord = createAsyncThunk(
//   "/words/answers",
//   async (answers, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     try {
//       const response = await axios.post("/words/answers", answers);
//       token.set(persistedToken);
//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         return toast.error("Incorrect answer");
//       }
//       if (error.response && error.response.status === 401) {
//         return toast.error("Such a word exists");
//       }
//       if (error.response && error.response.status === 404) {
//         return toast.error("Service not found");
//       }
//       if (error.response && error.response.status === 500) {
//         return toast.error("Server error");
//       }
//     }
//   }
// );
