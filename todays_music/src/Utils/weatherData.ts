import { www } from "../Types/weatherType";

export const WeatherData = (sky: string, pty: string): www | undefined => {
  switch (pty) {
    case "0":
      console.log("none");
      break;
    case "1":
      return {
        img: "/Assets/Img/비.png",
        wthr: "rainy",
        back: "https://img.freepik.com/premium-photo/river-view-through-window-in-rainy-day_112977-199.jpg",
      };
    case "2":
      return {
        img: "/Assets/Img/눈.png",
        wthr: "snow",
        back: "https://t1.daumcdn.net/cfile/tistory/9914393359FCA3CE25",
      };
    case "3":
      return {
        img: "/Assets/Img/눈.png",
        wthr: "snow",
        back: "https://t1.daumcdn.net/cfile/tistory/9914393359FCA3CE25",
      };
    case "4":
      return {
        img: "/Assets/Img/비.png",
        wthr: "rainy",
        back: "https://img.freepik.com/premium-photo/river-view-through-window-in-rainy-day_112977-199.jpg",
      };
  }
  switch (sky) {
    case "1":
      return {
        img: "/Assets/Img/햇빛.png",
        wthr: "sunny",
        back: "https://thumb.photo-ac.com/35/359d7b9fff5f21dec22b248b7c0826c2_t.jpeg",
      };
    case "3":
      return {
        img: "/Assets/Img/햇빛,구름.png",
        wthr: "sunny",
        back: "https://thumb.photo-ac.com/35/359d7b9fff5f21dec22b248b7c0826c2_t.jpeg",
      };
    case "4":
      return {
        img: "/Assets/Img/구름.png",
        wthr: "cloudy",
        back: "https://t1.daumcdn.net/cfile/tistory/99CB71435B207DBB33",
      };
  }
};
