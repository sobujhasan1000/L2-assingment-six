import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};
const slice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export default slice.reducer;
