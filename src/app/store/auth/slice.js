import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  register: () => {},
  getActiveUser: () => {},
};

const auth = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    activeUser: null,
  },
  reducers: {
    setActiveUser: (state, action) => {
      state.activeUser = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },

    ...middlewareActions,
  },
});

export const { register, setActiveUser, setToken } = auth.actions;

export default auth.reducer;
