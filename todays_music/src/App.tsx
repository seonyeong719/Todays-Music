import { ThemeProvider } from "styled-components";
import { theme } from "./Style/theme";
import GlobalStyles from "./Style/global";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./Routes/routing";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const RouterObject = createBrowserRouter(router);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={RouterObject} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
