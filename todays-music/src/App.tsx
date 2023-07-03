import { theme } from "./Style/theme";
import GlobalStyles from "./Style/global";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import router from "Routes/routing";

function App() {
  // const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
