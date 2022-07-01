import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topLeft: 10,
  topRight: 10,
  bottomRight: 10,
  bottomLeft: 10,
  borderRadiusText: "10px 10px 10px 10px",
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setTopLeft(state, action: { payload: number }) {
      state.topLeft = action.payload;
    },
    setTopRight(state, action) {
      state.topRight = action.payload;
    },
    setBottomRight(state, action) {
      state.bottomRight = action.payload;
    },
    setBottomLeft(state, action) {
      state.bottomLeft = action.payload;
    },
    setBorderRadiusText(state) {
      state.borderRadiusText = `${state.topLeft}px ${state.topRight}px ${state.bottomRight}px ${state.bottomLeft}px`;
    },
  },
});

export const {
  setBottomLeft,
  setBottomRight,
  setTopLeft,
  setTopRight,
  setBorderRadiusText,
} = stateSlice.actions;

export default stateSlice.reducer;
