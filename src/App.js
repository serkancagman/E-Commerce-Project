import { Header } from "./components/Header/Header";

import { Routes, Route} from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { FooterMain } from "./components/Footer/FooterMain";
import {HeaderProvider} from "./context/HeaderContext";

function App() {
  return (
    <>
    <HeaderProvider>
      <Header />
      

      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <FooterMain />
      </HeaderProvider>
    </>
  );
}

export default App;
