import React from "react";
import Home from "./pages/Home/Home.jsx";
import Inscription from "./pages/inscription/inscription.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Tarifs from "./pages/Tarifs/Tarifs.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./utils/ErrorPage";
import Galerie from "./pages/Gallery/Galerie";
import About from "./pages/About/About";
import BelowFooter from "./components/BelowFooter.jsx";
import GalerieV2 from "./pages/Gallery/Galeriev2.jsx";
import Planning from "./pages/Planning/Planning.jsx";
import Footer from "./components/Footer.jsx";
import BlogPostContainer from "./pages/Blog/Blogs.jsx";
import ChoisirSalle from "./pages/ChoisirSalle/ChoisirSalle.jsx";
import Activite from "./pages/activités/activité1.jsx";
import ActiviteInd from "./pages/activités/ActiviteInd.jsx";
import { PageEntraineurs } from "./pages/Coaches/PageEntraineurs.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<ChoisirSalle />}
          errorElement={<ErrorPage />}
        />
      </Routes>
      <div>
        <Navbar />
        <div className="relative">
          <Routes>
            <Route
              exact
              path="/"
              element={<ChoisirSalle />}
              errorElement={<ErrorPage />}
            />
            <Route
              exact
              path="/home"
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
              element={<ActiviteInd />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="/coaches"
              element={<PageEntraineurs />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="/blog"
              element={<BlogPostContainer />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="/tarifs"
              element={<Tarifs />}
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
        <div className="mt-60 w-full bottom-0 mx-auto">
          {/* <Footer />
          <BelowFooter /> */}
        </div>
      </div>
    </>
  );
}

export default App;
