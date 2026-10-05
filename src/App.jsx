import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";       // ← add this
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Info from "./components/Info";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Page1 />
            <Page2 />
            <Page3 />
          </>
        }
      />
      <Route path="/about" element={<Info />} />
    </Routes>
  );
};

export default App;