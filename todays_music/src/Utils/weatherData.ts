import { www } from "../Types/weatherType";

export const WeatherData = (sky: string, pty: string): www | undefined => {
  switch (pty) {
    case "0":
      console.log("none");
      break;
    case "1":
      return { img: "/Assets/Img/비.png", wthr: "rainy" };
    case "2":
      return { img: "/Assets/Img/눈.png", wthr: "snow" };
    case "3":
      return { img: "/Assets/Img/눈.png", wthr: "snow" };
    case "4":
      return { img: "/Assets/Img/비.png", wthr: "rainy" };
  }
  switch (sky) {
    case "1":
      return { img: "/Assets/Img/햇빛.png", wthr: "sunny" };
    case "3":
      return { img: "/Assets/Img/햇빛,구름.png", wthr: "sunny" };
    case "4":
      return { img: "/Assets/Img/구름.png", wthr: "cloudy" };
  }
};
