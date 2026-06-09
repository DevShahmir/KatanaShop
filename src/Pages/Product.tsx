import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import type { Product } from "../Data/ProductDetail"
import "./Product.css"

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

const ProductCard = ({ product, index = 0 }: { product: Product; index?: number }) => {
  return (
    <motion.article
      className="product-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={index}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link to={`/product/${product.id}`} className="product-card__link">
        <div className="product-card__image-wrap">
          <img src={product.img} alt={product.name} loading="lazy" />
          <span className="product-card__category">{product.category}</span>
          <span className={`product-card__stock ${product.inStock ? "product-card__stock--in" : "product-card__stock--out"}`}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <div className="product-card__body">
          <h3 className="product-card__name">{product.name}</h3>
          <p className="product-card__origin">{product.origin}</p>
          <p className="product-card__price">${product.price.toFixed(2)}</p>
          <div className="product-card__tags">
            {product.tags.map((tag, i) => (
              <span key={i} className="product-card__tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="product-card__glow" />
      </Link>
    </motion.article>
  )
}

export default ProductCard
