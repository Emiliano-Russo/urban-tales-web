import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Privacy } from "./screens/Privacy";
import { Home } from "./screens/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
