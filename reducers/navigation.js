import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { book: "book1", chapter: 9, section: "text" },
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setBook: (state, action) => {
      state.value.book = action.payload;
    },
    setChapter: (state, action) => {
      state.value.chapter = action.payload;
    },
    setSection: (state, action) => {
      state.value.section = action.payload;
    },
  },
});

export const { setBook, setChapter, setSection } = navigationSlice.actions;
export default navigationSlice.reducer;
