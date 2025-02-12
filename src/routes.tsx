import { Suspense, lazy } from "react"
import { Routes, Route} from "react-router-dom"
import { BarLoader } from "react-spinners"

import { colors, Container } from "./styles"
import Layout from "./features/Layout"
import RequireAuth from "./features/RequireAuth"

const Home = lazy(() => import("./pages/Home"))
const Shop = lazy(() => import("./pages/Shop"))
const About = lazy(() => import("./pages/About"))
const Product = lazy(() => import("./pages/Product"))
const Checkout = lazy(() => import("./pages/Checkout"))
const CartWishlist = lazy(() => import("./pages/CartWishlist"))
const Auth = lazy(() => import("./pages/Auth"))
const Signup = lazy(() => import("./pages/Signup"))
const Profile = lazy(() => import("./pages/Profile"))
const OrderSuccess = lazy(() => import("./pages/OrderSuccess"))

const Router = () => (
  <Suspense fallback={
    <Container className="central narrow">
      <BarLoader color={colors.black} height={2} cssOverride={{marginTop: '80px'}} />
    </Container>
  }>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<CartWishlist mode="cart" />} />
        <Route path="/shop/product/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<CartWishlist mode="wishlist" />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/signup" element={<Signup />} />
        {/* private routes */}
        <Route path="/" element={<RequireAuth />}>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/order-success/:id" element={<OrderSuccess />} />
        </Route>
      </Route>
    </Routes>
  </Suspense>
)

  export default Router
