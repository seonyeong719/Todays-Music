import { Weather } from "./../../Types/weatherType";
import { useQuery } from "@tanstack/react-query";
import WeatherApi from "../../Apis/villageWtrApi";

const village = async (w: Weather) => {
  const res = await WeatherApi.villageW(w);
  return res.data;
};

export const useGetVillageWeather = (w: Weather) => {
  const { data } = useQuery(["villageWeathers", w], () => village(w));
  return { data };
};
