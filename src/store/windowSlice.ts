import { createSlice } from "@reduxjs/toolkit";
import { JSX } from "react";

type State = {
  window: null | JSX.Element
}

const initialState: State = {
  window: null,
}

const windowSlice = createSlice({
  name: "window",
  initialState,
  reducers: {
    setWindow(state, action) {
      state.window = action.payload;
    },
  }
})

export const { setWindow } = windowSlice.actions
export default windowSlice.reducer