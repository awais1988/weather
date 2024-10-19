import axiosInstance from "../config/axiosConfig";
import { endpoints } from "../config/apiConfig";
import { geoKey } from "../config/env";

async function getGeoCities(value: string) {
  try {
    const data = await axiosInstance.get(
      `${endpoints.locationScreen.getGeoCities}${value}&apiKey=${geoKey}`
    );
    return data;
  } catch (error) {
    return error as Error;
  }
}

export const appApi = {
  getGeoCities,
};
