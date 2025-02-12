import { Outlet } from "react-router-dom"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Alert from "../Alert"
import AsideCart from "../../components/AsideCart"

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <AsideCart />
      <Alert />
    </>
  )
}

export default Layout
