import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {book: "book1", language: "en", theme: "light"},
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setBook: (state, action) => {
      state.value.book = action.payload;
    },
    setLanguage: (state, action) => {
      state.value.language = action.payload;
    },
    setTheme: (state, action) => {
      state.value.theme = action.payload;
    },
  },
});

export const { setBook, setLanguage, setTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
