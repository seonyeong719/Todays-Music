import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: "",
  },

  {
    path: "form/login",
    element: "",
  },
  {
    path: "form/signup",
    element: "",
    children: [
      {
        path: "chat",
        element: "",
      },
      {
        path: "item_detail/:idx",
        element: "",
      },
      {
        path: "landing",
        element: "",
      },
      {
        path: "main",
        element: "",
      },
      {
        path: "market_price/:word",
        element: "",
      },
      {
        path: "market_price",
        element: "",
      },
    ],
  },

  {
    path: "*",
    element: "",
  },
]);

export default router;
