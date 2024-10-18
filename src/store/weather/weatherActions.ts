import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosConfig";
import { endpoints } from "../../config/apiConfig";
import { weatherKey } from "../../config/env";
import { latLngTypes } from "../../../types";

const getWeatherFC = createAsyncThunk(
  "getWeatherFC",
  async (userPayload: latLngTypes) => {
    try {
      const { data } = await axiosInstance.get(
        `${endpoints.weatherScreen.getWeatherFC}${userPayload.lat},${userPayload.lon}&days=5&key=${weatherKey}`
      );
      return data;
    } catch (error) {
      return error as Error;
    }
  }
);

export const weatherActions = {
  getWeatherFC,
};
