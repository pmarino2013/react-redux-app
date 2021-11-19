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
    clearAuth:(state)=>{
      state.user=initialState.user
    }
  },
});

export const { addAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;

