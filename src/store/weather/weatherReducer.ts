import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { weatherActions } from "./weatherActions";
import { forecastDay, weatherData } from "../../../types";

export interface WeatherState {
  value: number;
  weatherData: weatherData | null;
  loading: boolean;
  toDayData: forecastDay | null;
}

const initialState: WeatherState = {
  value: 0,
  weatherData: null,
  loading: false,
  toDayData: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(weatherActions.getWeatherFC.fulfilled, (state, action) => {
      state.weatherData = action?.payload;
      state.toDayData = action?.payload?.forecast?.forecastday[0];
      state.loading = false;
    });
    builder.addCase(weatherActions.getWeatherFC.pending, (state, action) => {
      state.loading = true;
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = weatherSlice.actions;

export default weatherSlice.reducer;
