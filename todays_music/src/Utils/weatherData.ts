import { www } from "../Types/weatherType";

export const WeatherData = (sky: string, pty: string): www | string | undefined => {
  // switch (pty) {
  //   case "0":
  //     console.log("none");
  //     break;
  //   case "1":
  //     return "/Assets/Img/비.png";
  //   case "2":
  //     return "/Assets/Img/눈.png";
  //   case "3":
  //     return "/Assets/Img/눈.png";
  //   case "4":
  //     return "/Assets/Img/비.png";
  // }
  // switch (sky) {
  //   case "1":
  //     return "/Assets/Img/햇빛.png";
  //   case "3":
  //     return "/Assets/Img/햇빛,구름.png";
  //   case "4":
  //     return "/Assets/Img/구름.png";
  // }
  switch (pty) {
    case "0":
      console.log("none");
      break;
    case "1":
      return { img: "/Assets/Img/비.png", wth: "rainy" };
    case "2":
      return { img: "/Assets/Img/눈.png", wth: "snow" };
    case "3":
      return { img: "/Assets/Img/눈.png", wth: "snow" };
    case "4":
      return { img: "/Assets/Img/비.png", wth: "rainy" };
  }
  switch (sky) {
    case "1":
      return { img: "/Assets/Img/햇빛.png", wth: "sunny" };
    case "3":
      return { img: "/Assets/Img/햇빛,구름.png", wth: "sunny" };
    case "4":
      return { img: "/Assets/Img/구름.png", wth: "cloudy" };
  }
};

// export const MusicData = (sky: string, pty: string) => {
//   switch (pty) {
//     case "0":
//       console.log("none");
//       break;
//     case "1":
//       return "/Assets/Img/비.png";
//     case "2":
//       return "/Assets/Img/눈.png";
//     case "3":
//       return "/Assets/Img/눈.png";
//     case "4":
//       return "/Assets/Img/비.png";
//   }
//   switch (sky) {
//     case "1":
//       return "/Assets/Img/햇빛.png";
//     case "3":
//       return "/Assets/Img/햇빛,구름.png";
//     case "4":
//       return "/Assets/Img/구름.png";
//   }
// };
