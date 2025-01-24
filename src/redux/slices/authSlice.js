import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("authToken") || null, // Retrieve token from localStorage
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("authToken", action.payload); // Persist token in localStorage
    },
    clearToken: (state) => {
      state.token = null;
      localStorage.removeItem("authToken"); // Clear token from localStorage
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
