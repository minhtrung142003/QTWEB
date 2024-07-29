import AboutUs from "@pages/about us";
import Home from "@pages/home";
import ShowCase from "@pages/showcase/ShowCase";
import OurStrength from "@pages/solution/OurStrength";
import Solution from "@pages/solution/Solution";
import SolutionVisualization from "@pages/solution/SolutionVisualization";
import React from "react";
import { Route, Routes } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solution_technology" element={<Solution />} />
      <Route path="/solution_ourstrength" element={<OurStrength />} />
      <Route path="/showcase" element={<ShowCase />} />
      <Route path="/solution_visual" element={<SolutionVisualization />} />
      <Route path="/aboutUs" element={<AboutUs />} />
    </Routes>
  );
};

export default Main;
