import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import "./input.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}
