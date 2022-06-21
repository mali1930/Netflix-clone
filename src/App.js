import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Comp/Footer";
import Dash from "./Comp/Dash";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import MovieDetail from "./Comp/MovieDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dash/:movie_id" element={<MovieDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
