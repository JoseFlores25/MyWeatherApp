import axios from "axios";

export const fetchCurrentLocation = async (currentLocation) => {
  const { lat, long, city } = currentLocation || {};
  const options = {
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/weather",
    params: {
      q: city || "",
      lat: "0",
      lon: "0",
      id: "2172797",
      lang: "null",
      units: "imperial",
      mode: "xml, html",
    },
    headers: {
      "x-rapidapi-key": "e15a2bf269mshb2d5059acf54b7cp185465jsn9378abc274c2",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    },
  };
  const { data } = await axios(options);
  return data;
};
