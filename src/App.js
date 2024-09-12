import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import ShopCategory from "./Pages/ShopCategory";
import AboutUs from "./Pages/AboutUs";
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<ShopCategory category="product" />}
          />
          <Route path="/prints" element={<ShopCategory category="print" />} />
          <Route path="/aboutus" element={<AboutUs category="about" />} />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
