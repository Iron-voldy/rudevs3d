import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DeveloperTeam from "./pages/DeveloperTeam";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/developer-team" element={<DeveloperTeam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
