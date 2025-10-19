import { createSlice } from "@reduxjs/toolkit";
import morphologyConfig from "data/morphologyConfig";

const initialState = morphologyConfig.reduce((acc, morph) => {
  if (morph.key === "masculine" || morph.key === "feminine" || morph.key === "neuter") {
    acc[morph.key] = false;
  } else {
    acc[morph.key] = true;
  }
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
    setAll: (state, action) => {
      return morphologyConfig.reduce((acc, morph) => {
        acc[morph.key] = action.payload;
        return acc;
      }, {});
    },
  },
});

export const { toggleMorphology, setAll } = morphologySlice.actions;
export default morphologySlice.reducer;
