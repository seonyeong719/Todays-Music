import { theme } from "./Style/theme";
import GlobalStyles from "./Style/global";
import { ThemeProvider } from "styled-components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "Routes/routing";

function App() {
  // const queryClient = new QueryClient();
  const RouterObject = createBrowserRouter(router);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={RouterObject} />
    </ThemeProvider>
  );
}

export default App;
