import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// INTERNAL IMPORT
import Narbar from "./Navbar/Narbar";
import Home from "./componets/Home";
import About from "./componets/About";
import Contact from "./componets/Contact";
import Login from "./componets/Login";
import Footer from "./componets/Footer";
import Google from "./componets/Map_Section/GooglePlcasesApi.jsx";

const Path_Managemate = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 28.7041,
    lng: 77.1025,
  });

  return (
    <>
      <BrowserRouter>
        <Narbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route
            path="/Navigate"
            element={<Google setSelectedLocation={setSelectedLocation} />}
          />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Path_Managemate;
