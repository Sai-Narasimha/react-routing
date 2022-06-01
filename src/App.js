import "./App.css";
import { Home } from "./Components/Home";
import { AllProducts } from "./Components/AllProducts";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Product } from "./Components/Product";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/allProducts/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
