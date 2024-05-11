import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type TTodo = {
  img: string;
  categories: string;
  title: string;
  amount: number;
  description: string;
};

type TInitialstate = {
  todos: TTodo[];
};

const initialState: TInitialstate = {
  todos: [],
};
const slice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    postdonation: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload });
    },
  },
});

export default slice.reducer;
