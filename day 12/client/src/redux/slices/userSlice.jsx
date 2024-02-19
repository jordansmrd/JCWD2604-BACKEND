/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  id: "",
  name: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    functionLogin: (state, action) => {
      localStorage.setItem("user", action.payload.token);
      delete action.payload.token;

      return {
        ...state,
        ...action.payload,
      };
    },
    functionLogout: (state, action) => {
      localStorage.removeItem("user");

      return initialState;
    },
  },
});

export const { functionLogin, functionLogout } = userSlice.actions;
export default userSlice.reducer;
