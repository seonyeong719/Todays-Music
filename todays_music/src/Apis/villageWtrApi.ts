import { Axios } from "./@core";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const PATH = "/getVilageFcst";

interface Weather {
  numOfRows: number;
  pageNo: number;
  base_date: number;
  base_time: number;
  nx: number;
  ny: number;
}

const WeatherApi = {
  villageW(w: Weather) {
    return Axios.get<Weather>(`${PATH}?serviceKey=${API_KEY}`, {
      params: {
        w,
      },
    });
  },
};
// 아직 공부중.. 임시로..
// } async (w: Weather) => {
//   return Axios.get<Weather>(`${PATH}?serviceKey=${API_KEY}`, {
//     params: { w },
//   });
// };

export default WeatherApi;
