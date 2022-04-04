import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Roost from "../pages/chikn/roost";
import LPFarm from '../pages/farmland/lpfarm';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/roost" element={<Roost />} />
      <Route path="/lpfarm" element={<LPFarm />} />
    </Routes>
  );
};

export default Router;
