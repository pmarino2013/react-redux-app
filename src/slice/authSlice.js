import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAuth: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addAuth } = authSlice.actions;
export default authSlice.reducer;