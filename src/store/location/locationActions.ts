import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosConfig";
import { endpoints } from "../../config/apiConfig";
import { weatherKey } from "../../config/env";
import { latLngTypes } from "../../../types";

const getCityData = createAsyncThunk(
  "getCityData",
  async (userPayload: latLngTypes) => {
    try {
      const { data } = await axiosInstance.get(
        `${endpoints.locationScreen.getCities}${userPayload.lat},${userPayload.lon}&key=${weatherKey}`
      );
      return data;
    } catch (error) {
      return error as Error;
    }
  }
);

export const locationActions = {
  getCityData,
};
