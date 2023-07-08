import LayoutIndex from "../Components/Layout";
import MainPage from "../Page/Main/mainPage";
import Music from "../Page/Music/music";
import Weather from "../Page/Weather/weather";

const router = [
  {
    path: "/",
    element: <LayoutIndex />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/todays-music",
        element: <Music />,
      },
      {
        path: "/todays-weather",
        element: <Weather />,
      },
    ],
  },
];

export default router;
