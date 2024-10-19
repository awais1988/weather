import { rootURL, geoRootURL } from "./env";

interface Endpoints {
  weatherScreen: {
    getWeatherFC: string;
  };
  locationScreen: {
    getCities: string;
    getGeoCities: string;
  };
}

export const endpoints: Endpoints = {
  weatherScreen: {
    getWeatherFC: `${rootURL}forecast.json?q=`,
  },
  locationScreen: {
    getCities: `${rootURL}search.json?q=`,
    getGeoCities: `${geoRootURL}geocode/autocomplete?text=`,
  },
};
