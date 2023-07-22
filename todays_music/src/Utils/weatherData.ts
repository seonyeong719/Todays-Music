export const WeatherData = (sky: string, pty: string) => {
  switch (pty) {
    case "0":
      console.log("none");
      break;
    case "1":
      return "/Assets/Img/비.png";
    case "2":
      return "/Assets/Img/눈.png";
    case "3":
      return "/Assets/Img/눈.png";
    case "4":
      return "/Assets/Img/비.png";
  }
  switch (sky) {
    case "1":
      return "/Assets/Img/햇빛.png";
    case "3":
      return "/Assets/Img/햇빛,구름.png";
    case "4":
      return "/Assets/Img/구름.png";
  }
};
