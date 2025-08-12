import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const authenSlice = createSlice({
  name: "authenReducer",
  initialState,
  reducers: {
    setReduxAuthen: (state, action) => {
      return action.payload;
    },
    setReduxAuthenClear: (state) => {
      return false;
    },
  },
});

export const { setReduxAuthen, setReduxAuthenClear } = authenSlice.actions;

export default authenSlice.reducer;
