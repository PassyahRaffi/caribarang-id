import React from "react";
import { Routes, Route } from "react-router-dom";
import "./input.css";

import Products from "./pages/Products";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Products />} />
      </Routes>
    </>
  );
}
