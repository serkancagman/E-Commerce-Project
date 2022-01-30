import { Header } from "./components/Header/Header";

import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { FooterMain } from "./components/Footer/FooterMain";
import { HeaderProvider } from "./context/HeaderContext";
import { LoginFormProvider } from "context/LoginFormContext";

function App() {
  return (
    <>
      <HeaderProvider>
        <LoginFormProvider>

        
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <FooterMain />
        </LoginFormProvider>
      </HeaderProvider>
    </>
  );
}

export default App;
