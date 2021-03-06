import { QueryClient, QueryClientProvider } from "react-query";
import { HeaderProvider } from "./context/HeaderContext";
import { ReactQueryDevtools } from "react-query/devtools";
import MainRouter from "Router/MainRouter";
import { ProductProvider } from "context/ProductContext";
import { AuthLoginProvider } from "context/AuthLoginContext";
import { ShopCartProvider } from "context/ShopCartContext";
import { SaleandOrderProvider } from "context/AdminContext/SaleandOrderContext";
import { ToOrderProvider } from "context/ToOrderContext";
import { PaymentFormProvider } from "context/PaymentFormContext";
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
        <AuthLoginProvider>
          <ProductProvider>
            <ShopCartProvider>
            <HeaderProvider>
              <SaleandOrderProvider>
                <ToOrderProvider>
                  <PaymentFormProvider>
                <MainRouter />
                </PaymentFormProvider>
                </ToOrderProvider>
              </SaleandOrderProvider>
            </HeaderProvider>
            </ShopCartProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </ProductProvider>
        </AuthLoginProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
