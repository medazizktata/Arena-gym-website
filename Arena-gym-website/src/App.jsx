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
import GalerieV2 from "./pages/Gallery/Galeriev2.jsx";
import Planning from "./pages/Planning/Planning.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
            errorElement={<ErrorPage />}
          />

          <Route
            path="/inscription"
            element={<Inscription />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/galerie"
            element={<GalerieV2 />}
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
          <Route
            path="/tarifs"
            element={<Home />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/planning"
            element={<Planning />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/contact"
            element={<Home />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/about"
            element={<About />}
            errorElement={<ErrorPage />}
          />
        </Routes>
      </div>
      {/* <div className="mt-20 w-full bottom-0 mx-auto">
        <BelowFooter />
      </div> */}
    </>
  );
}

export default App;
