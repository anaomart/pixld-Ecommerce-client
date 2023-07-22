import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductsDisplay from "./pages/productsDisplay/ProductsDisplay";
import ScrollToTop from "./utils/ScrollTop";
import Product from "./pages/product/Product";
function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<ProductsDisplay />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
