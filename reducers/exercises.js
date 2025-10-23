import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answers: {}, // { [exerciseId]: { [index]: { text, morph } } }
  stats: {}, // { [exerciseId]: { totalGaps, totalSelects, answeredGaps, answeredSelects } }
  checked: {}, // { [exerciseId]: { correctInputs, correctSelects } }
  checkedDetails: {}, // { [exerciseId]: { [index]: { isCorrectInput, isCorrectSelect } } }
};

const exercisesSlice = createSlice({
  name: "exercises",
  initialState,
  reducers: {
    updateAnswer: (state, action) => {
      const { exerciseId, index, field, value } = action.payload;
      if (!state.answers[exerciseId]) state.answers[exerciseId] = {};
      if (!state.answers[exerciseId][index]) state.answers[exerciseId][index] = {};
      state.answers[exerciseId][index][field] = value;
    },

    updateStats: (state, action) => {
      if (!action.payload.exerciseId) return; 
      const { exerciseId, totalGaps, totalSelects, answeredGaps, answeredSelects } = action.payload;
      state.stats[exerciseId] = { totalGaps, totalSelects, answeredGaps, answeredSelects };
    },

    resetExercises: (state) => {
      state.answers = {};
      state.stats = {};
      state.checked = {};
    },

    checkExercise: (state, action) => {
      const { exerciseId, correctInputs, correctSelects, details } = action.payload;
      state.checked[exerciseId] = { correctInputs, correctSelects };
      state.checkedDetails[exerciseId] = details;
    },
  },
});

export const { updateAnswer, updateStats, checkExercise, resetExercises } = exercisesSlice.actions;
export default exercisesSlice.reducer;
