import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Privacy } from "./screens/Privacy";
import { Home } from "./screens/Home";
import { DeleteAccount } from "./screens/DeleteAccount";
import { ResetPassword } from "./screens/ResetPassword";
import { ResetEmail } from "./screens/ResetEmail";
import { ConfrimEmail } from "./screens/ConfirmEmail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/delete" element={<DeleteAccount />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/change-email" element={<ResetEmail />} />
        <Route path="/confirm-email" element={<ConfrimEmail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
