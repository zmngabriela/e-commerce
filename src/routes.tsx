import { Suspense, lazy } from "react"
import { Routes, Route} from "react-router-dom"
import { BarLoader } from "react-spinners"

import { colors, Container } from "./styles"

const Home = lazy(() => import("./pages/Home"))
const Shop = lazy(() => import("./pages/Shop"))
const About = lazy(() => import("./pages/About"))
const Product = lazy(() => import("./pages/Product"))
const Checkout = lazy(() => import("./pages/Checkout"))
const CartWishlist = lazy(() => import("./pages/CartWishlist"))


const Router = () => (
  <Suspense fallback={
    <Container className="central narrow">
      <BarLoader color={colors.black} cssOverride={{marginTop: '80px'}} />
    </Container>
  }>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<CartWishlist mode="cart" />} />
      <Route path="/shop/product/:id" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/favorites" element={<CartWishlist mode="wishlist" />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </Suspense>
)

  export default Router
