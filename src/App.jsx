import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";

import { Navigation } from "./Navigation/Navigation";
import { Footer } from "./Footer/Footer";

import Home from "./Pages/Home/Home";

/* 
    For Build use:
    Comment out these imports when using Vite with Chrome Dev Tools.
    Only use when building and deploying.
*/

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>

    // <>
    // <Navigation />

    // 	<Home />

    // <Footer />

    // </>
  );
};

export default App;
