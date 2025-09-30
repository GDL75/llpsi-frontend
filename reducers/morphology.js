import { createSlice } from "@reduxjs/toolkit";
import morphologyConfig from "assets/morphologyConfig";

const initialState = morphologyConfig.reduce((acc, morph) => {
  acc[morph.key] = true;
  return acc;
}, {});

const morphologySlice = createSlice({
  name: "morphology",
  initialState,
  reducers: {
    toggleMorphology: (state, action) => {
      const key = action.payload;
      state[key] = !state[key];
    },
  },
});

export const { toggleMorphology  } = morphologySlice.actions;
export default morphologySlice.reducer;
