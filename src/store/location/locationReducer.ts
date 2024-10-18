import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {locationActions} from './locationActions';
import {cityTypes} from '../../../types';

export interface LocationState {
  locationArray: object[];
  currentLocation: cityTypes | null;
}

const initialState: LocationState = {
  locationArray: [],
  currentLocation: null,
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(locationActions.getCityData.fulfilled, (state, action) => {
      state.locationArray.push(action.payload[0]);
      state.currentLocation = action.payload[0];
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = locationSlice.actions;

export default locationSlice.reducer;
