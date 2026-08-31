import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Sections: JSON.parse(localStorage.getItem("taskes")) || {},
};

const Taskes = createSlice({
  name: "Taskes",
  initialState,
  reducers: {
    addsection(state, { payload }) {
      state.Sections[payload] = {};
    },
    addtask(state, { payload }) {
      state.Sections[payload[0]][payload[1]] = {
        isDone: false,
        Name: `${payload[1]}`,
      };
    },
    check(state, { payload }) {
      state.Sections[payload[0]][payload[1]].isDone =
      !state.Sections[payload[0]][payload[1]].isDone;
    },
  },
});

export const { addsection, addtask, check } = Taskes.actions;
export default Taskes.reducer;
