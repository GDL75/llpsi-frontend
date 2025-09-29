import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { section: "text"},
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setSection: (state, action) => {
      state.value.section = action.payload;
    },
  },
});

export const { setSection } = navigationSlice.actions;
export default navigationSlice.reducer;
