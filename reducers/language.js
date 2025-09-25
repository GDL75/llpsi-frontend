import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { code: "fr" },
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.value.code = action.payload.code;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
