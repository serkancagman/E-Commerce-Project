import { Header } from "./Components/Header/Header";
import "./responsive.css";
import { Routes, Route} from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { FooterMain } from "./Components/Footer/FooterMain";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <FooterMain />
    </>
  );
}

export default App;
