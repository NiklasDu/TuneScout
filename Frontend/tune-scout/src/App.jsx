import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Similar from "./pages/Similar";
import CountriesTop from "./pages/CountriesTop";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/similar-sounds" element={<Similar />} />

        <Route path="/countries-top-hits" element={<CountriesTop />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
