import LayoutIndex from "Components/Layout";

const router = [
  {
    path: "",
    element: <LayoutIndex />,
    children: [
      {
        path: "",
        element: "",
      },
    ],
  },

  {
    path: "*",
    element: "",
  },
];

export default router;
