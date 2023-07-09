import React from "react";
import { Home_loan } from "./Home_loan";
import { Car_loan } from "./Car_loan";
import { Personal_loan } from "./Personal_loan";
import { Calculator_nav } from "./Calculator_nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main_component = () => {
  return (
    <BrowserRouter>
      <Calculator_nav />
      <Routes>
        <Route path="/" element={<Home_loan />} />
        <Route path="/Personal-Loan" element={<Personal_loan />} />
        <Route path="/Car-Loan" element={<Car_loan />} />
        <Route path="/react-calculator-project" element={<Home_loan />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main_component;
