import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  login: () => {},
  register: () => {},
  getActiveUser: () => {},
};

const auth = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    activeUser: null,
    error: null,
  },
  reducers: {
    setActiveUser: (state, action) => {
      state.activeUser = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },

    ...middlewareActions,
  },
});

export const { login, register, setActiveUser, setToken, setError } =
  auth.actions;

export default auth.reducer;
