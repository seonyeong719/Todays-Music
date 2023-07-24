import { AxiosResponse } from "axios";
import { Axios } from "./@core";
import { Weathers } from "../Types/weatherType";

const WeatherApi = {
  villageW(w: Weathers): Promise<AxiosResponse<Weathers>> {
    const PATH = "/getVilageFcst";
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    return Axios.get<Weathers>(`${PATH}?serviceKey=${API_KEY}`, {
      params: {
        ...w,
      },
    });
  },
};

export default WeatherApi;
