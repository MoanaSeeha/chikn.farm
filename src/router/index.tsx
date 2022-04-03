import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Roost from "../pages/chikn/roost";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/roost" element={<Roost />} />
    </Routes>
  );
};

export default Router;
