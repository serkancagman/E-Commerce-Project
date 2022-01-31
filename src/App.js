import { Header } from "./components/Header/Header";
import { QueryClient, QueryClientProvider } from "react-query";

import { Home } from "./components/Pages/Home";
import { FooterMain } from "./components/Footer/FooterMain";
import { HeaderProvider } from "./context/HeaderContext";
import { LoginFormProvider } from "context/LoginFormContext";
import { ReactQueryDevtools } from "react-query/devtools";
import MainRouter from "Router/MainRouter";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HeaderProvider>
          <LoginFormProvider>
          <MainRouter/>
          </LoginFormProvider>
        </HeaderProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
