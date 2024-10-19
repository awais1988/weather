import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { locationActions } from "./locationActions";
import { cityTypes } from "../../../types";

export interface LocationState {
  locationArray: cityTypes[];
  currentLocation: cityTypes | null;
  loading: boolean;
}

const initialState: LocationState = {
  locationArray: [],
  currentLocation: null,
  loading: false,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    selectLocation: (state, action: PayloadAction<cityTypes>) => {
      state.currentLocation = action.payload;
    },
    removeLocation: (state, action: PayloadAction<cityTypes>) => {
      state.locationArray = state.locationArray.filter(
        (item) => item.id !== action.payload.id
      );
      if (
        state.currentLocation &&
        state.currentLocation.id === action.payload.id
      ) {
        state.currentLocation = state.locationArray[0];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(locationActions.getCityData.fulfilled, (state, action) => {
      state.loading = false;
      const locValue = action?.payload[0];
      const isExist = state.locationArray.find(
        (item) => item.id === locValue.id
      );
      if (!isExist) {
        state.locationArray.push(locValue);
        state.currentLocation = locValue;
      }
    });
    builder.addCase(locationActions.getCityData.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const { selectLocation, removeLocation } = locationSlice.actions;

export default locationSlice.reducer;
