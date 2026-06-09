import { motion } from "framer-motion"
import FilterBar from "../Components/FilterBar"
import "./ProductsPage.css"

const ProductsPage = () => {
  return (
    <div className="products-page">
      <div className="container">
        <motion.div
          className="products-page__header"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">The Arsenal</p>
          <h1 className="section-title">Blade Collection</h1>
          <p className="section-subtitle">
            Ceremonial, battle, and display katanas — each forged with purpose.
          </p>
        </motion.div>

        <FilterBar />
      </div>
    </div>
  )
}

export default ProductsPage
