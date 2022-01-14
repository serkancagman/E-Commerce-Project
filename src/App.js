import { Header } from "./Components/Header/Header";
import "./responsive.css";
import { Routes, Route} from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { FooterMain } from "./Components/Footer/FooterMain";
import {HeaderProvider} from "./Context/HeaderContext";

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
