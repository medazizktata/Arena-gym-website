import React from "react";
import Home from "./pages/Home/Home.jsx";
import Inscription from "./pages/inscription/inscription.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./utils/ErrorPage";
import Galerie from "./pages/Gallery/Galerie";
import About from "./pages/About/About";
import BelowFooter from "./components/BelowFooter.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Inscription />} errorElement={<ErrorPage />} />
        <Route
          path="/inscription"
          element={<Inscription />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/galerie"
          element={<Galerie />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/activites"
          element={<Home />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/coaches"
          element={<Home />}
          errorElement={<ErrorPage />}
        />
        <Route path="/blog" element={<Home />} errorElement={<ErrorPage />} />
        <Route path="/tarifs" element={<Home />} errorElement={<ErrorPage />} />
        <Route
          path="/planning"
          element={<Home />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/contact"
          element={<Home />}
          errorElement={<ErrorPage />}
        />
        <Route path="/about" element={<About />} errorElement={<ErrorPage />} />
        <Route element={<ErrorPage />} />
      </Routes>
      <BelowFooter/>
    </>
  );
}

export default App;
