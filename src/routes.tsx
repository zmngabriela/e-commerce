import { Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import CartWishlist from "./pages/CartWishlist";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/cart" element={<CartWishlist isCart={true} />} />
    <Route path="/shop/:id" element={<Product />} />
    <Route path="/about" element={<About />} />
    <Route path="/favorites" element={<CartWishlist isCart={false} />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

  export default Router
