import { AxiosResponse } from "axios";
import { Axios } from "./@core";
import { Weather } from "../Types/weatherType";

const WeatherApi = {
  villageW(w: Weather): Promise<AxiosResponse<Weather>> {
    const PATH = "/getVilageFcst";
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    return Axios.get<Weather>(`${PATH}?serviceKey=${API_KEY}`, {
      params: {
        w,
      },
    });
  },
};

export default WeatherApi;
