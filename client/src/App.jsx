import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductsDisplay from "./pages/productsDisplay/ProductsDisplay";
import ScrollToTop from "./utils/ScrollTop";
function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<ProductsDisplay />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
