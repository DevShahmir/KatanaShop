import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import PageTransition from "./Components/PageTransition"
import HomePage from "./Pages/HomePage"
import ProductsPage from "./Pages/ProductsPage"
import ProductDetail from "./Pages/productDetail"
import CustomizePage from "./Pages/CustomizePage"
import OrderNow from "./Pages/OrderNow"

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  const location = useLocation()

  return (
    <div className="app-shell">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="/products"
            element={
              <PageTransition>
                <ProductsPage />
              </PageTransition>
            }
          />
          <Route
            path="/product/:id"
            element={
              <PageTransition>
                <ProductDetail />
              </PageTransition>
            }
          />
          <Route
            path="/customize"
            element={
              <PageTransition>
                <CustomizePage />
              </PageTransition>
            }
          />
          <Route
            path="/order"
            element={
              <PageTransition>
                <OrderNow />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
