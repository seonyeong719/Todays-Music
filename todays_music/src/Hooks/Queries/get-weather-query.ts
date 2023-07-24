import { Weathers } from "./../../Types/weatherType";
import { useQuery } from "@tanstack/react-query";
import WeatherApi from "../../Apis/villageWtrApi";

const village = async (w: Weathers) => {
  const res = await WeatherApi.villageW(w);
  return res.data;
};

export const useGetVillageWeather = (w: Weathers) => {
  const { data, isLoading } = useQuery(["villageWeathers", w], () => village(w));
  return { data, isLoading };
};
