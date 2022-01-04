import { Header } from "./Components/Header/Header";
import "./responsive.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { FooterMain } from "./Components/Footer/FooterMain";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <FooterMain/>
    </>
  );
}

export default App;
