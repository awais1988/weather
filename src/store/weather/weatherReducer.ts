import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { weatherActions } from "./weatherActions";
import { forecastDay, weatherData } from "../../../types";

export interface WeatherState {
  weatherData: weatherData | null;
  loading: boolean;
  toDayData: forecastDay | null;
}

const initialState: WeatherState = {
  weatherData: null,
  loading: false,
  toDayData: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
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

export const {} = weatherSlice.actions;

export default weatherSlice.reducer;
