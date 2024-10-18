import { rootURL } from "./env";

interface Endpoints {
  weatherScreen: {
    getWeatherFC: string;
  };
  locationScreen: {
    getCities: string;
  };
}

export const endpoints: Endpoints = {
  weatherScreen: {
    getWeatherFC: `${rootURL}forecast.json?q=`,
  },
  locationScreen: {
    getCities: `${rootURL}search.json?q=`,
  },
};
