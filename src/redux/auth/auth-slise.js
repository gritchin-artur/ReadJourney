import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import authOperations from "./auth-operations";

const initialState = {
  id: null,
  name: null,
  email: null,
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const handleLogOutFulfilled = (state) => {
  state.name = null;
  state.email = null;
  state.token = null;
  state.isLoggedIn = false;
  state.refreshToken = false;
  state.isFetchingCurrentUser = false;
};

const handleFetchCurrentUserPending = (state) => {
  state.isRefreshing = true;
  state.isLoggedIn = false;
};

const handleFetchCurrentUserFulfilled = (state, { payload }) => {
  state.name = payload.name;
  state.email = payload.email;
  state.isLoggedIn = state.token ? true : false;
  state.isFetchingCurrentUser = false;
};

const handleFetchCurrentUserReject = (state) => {
  state.isFetchingCurrentUser = false;
  state.isLoggedIn = false;
};

const handleRefreshCurrentUserReject = (state) => {
  state.isFetchingCurrentUser = false;
  state.isLoggedIn = false;
};

const handleRefreshCurrentUserPending = (state) => {
  state.isRefreshing = true;
  state.isLoggedIn = false;
};

const handleRefreshCurrentUserFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.refreshToken = payload.refreshToken;
};

const handleRegisterLogInPending = (state, { payload }) => {
  state.isLoggedIn = false;
};

const handleRegisterLogInFulfilled = (state, { payload }) => {
  state.name = payload.name;
  state.email = payload.email;
  state.token = payload.token;
  state.refreshToken = payload.refreshToken;
  // state.isLoggedIn = payload.token ? true : false;
  state.isLoggedIn = true;
};

const handleRegisterLogInReject = (state, { payload }) => {
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) => {
    builder

      .addCase(authOperations.logOut.fulfilled, handleLogOutFulfilled)
      .addCase(
        authOperations.fetchCurrentUser.pending,
        handleFetchCurrentUserPending
      )
      .addCase(
        authOperations.fetchCurrentUser.fulfilled,
        handleFetchCurrentUserFulfilled
      )
      .addCase(
        authOperations.fetchCurrentUser.rejected,
        handleFetchCurrentUserReject
      )

            .addCase(
        authOperations.refreshTokenUser.pending,
        handleRefreshCurrentUserPending
      )
      .addCase(
        authOperations.refreshTokenUser.fulfilled,
        handleRefreshCurrentUserFulfilled
      )
      .addCase(
        authOperations.refreshTokenUser.rejected,
        handleRefreshCurrentUserReject
      )

      .addMatcher(
        isAnyOf(
          authOperations.register.fulfilled,
          authOperations.logIn.fulfilled
        ),
        handleRegisterLogInFulfilled
      )
      .addMatcher(
        isAnyOf(
          authOperations.register.rejected,
          authOperations.logIn.rejected
        ),
        handleRegisterLogInReject
      )
      .addMatcher(
        isAnyOf(authOperations.register.pending, authOperations.logIn.pending),
        handleRegisterLogInPending
      );
  },
});

export default authSlice.reducer;

// const confused = "no";
// const myKey = confused;

// const obj = {
//   [myKey]: false,
// };

// console.log(obj);