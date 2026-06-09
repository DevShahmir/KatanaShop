import { useState } from "react"
import { motion } from "framer-motion"
import { Products } from "../Data/ProductDetail"
import ProductCard from "../Pages/Product"
import "./FilterBar.css"

type Category = "all"|"ceremonial" | "battle" | "display"
const FilterBar = () => {
      const [activecategory, setActiveCategory] = useState<Category>("all")
    
    const Filter = activecategory === "all"?Products:Products.filter((p)=> p.category === activecategory)

    const tabs: { key: Category; label: string }[] = [
      { key: "all", label: "All" },
      { key: "ceremonial", label: "Ceremonial" },
      { key: "battle", label: "Battle" },
      { key: "display", label: "Display" },
    ]

 return (
    <>
      <div className="filter-bar__tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`filter-bar__tab ${activecategory === tab.key ? "filter-bar__tab--active" : ""}`}
            onClick={() => setActiveCategory(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        className="filter-bar__grid"
        key={activecategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {Filter.length === 0 ? (
          <p className="filter-bar__empty">No blades in this category.</p>
        ) : (
          Filter.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))
        )}
      </motion.div>
    </>
  )
}

export default FilterBar
