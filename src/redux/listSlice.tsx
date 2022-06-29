import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ListState } from "../../shared/countryData.interface";

const initialState: ListState[] = [];

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ListState>) => {
      !state.some((x) => x.name === action.payload.name) &&
        state.push(action.payload);
    },
    delItem: (state, action: PayloadAction<ListState>) => {
      const index = state.findIndex((x) => x.name === action.payload.name)
      state.splice(index, 1)
    },
  },
});

export const { addItem, delItem } = listSlice.actions;

export default listSlice.reducer;
