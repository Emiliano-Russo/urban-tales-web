import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Privacy } from "./screens/Privacy";
import { Home } from "./screens/Home";
import { DeleteAccount } from "./screens/DeleteAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/delete" element={<DeleteAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
