import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ProductsContainer from "./Components/ProductsContainer";



const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductsContainer />} />
         <Route path="*" element={<h1>page not found</h1>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
