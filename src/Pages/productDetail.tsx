import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Products } from "../Data/ProductDetail"
import "./productDetail.css"

const ProductDetail = () => {
  const { id } = useParams()
  const product = Products.find((p) => p.id === Number(id))

  if (!product) {
    return (
      <div className="product-detail container">
        <div className="product-detail__not-found">
          <h1>Blade Not Found</h1>
          <Link to="/products" className="btn-outline">Return to Collection</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="product-detail">
      <div className="container product-detail__grid">
        <motion.div
          className="product-detail__image-wrap"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src={product.img} alt={product.name} />
          <div className="product-detail__image-frame" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="product-detail__category">{product.category}</p>
          <h1 className="product-detail__name">{product.name}</h1>
          <p className="product-detail__origin">{product.origin}</p>
          <p className="product-detail__price">${product.price.toFixed(2)}</p>
          <span className={`product-detail__stock ${product.inStock ? "product-detail__stock--in" : "product-detail__stock--out"}`}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>

          <div className="product-detail__specs">
            <h3 className="product-detail__specs-title">Specifications</h3>
            <div className="product-detail__spec-row">
              <span className="product-detail__spec-label">Category</span>
              <span>{product.category}</span>
            </div>
            <div className="product-detail__spec-row">
              <span className="product-detail__spec-label">Origin</span>
              <span>{product.origin}</span>
            </div>
            <div className="product-detail__spec-row">
              <span className="product-detail__spec-label">Availability</span>
              <span>{product.inStock ? "Available" : "Unavailable"}</span>
            </div>
          </div>

          <div className="product-detail__tags">
            {product.tags.map((tag, i) => (
              <span key={i} className="product-detail__tag">{tag}</span>
            ))}
          </div>

          <div className="product-detail__actions">
            <Link to="/order" className="btn-primary">Order Now</Link>
            <Link to="/customize" className="btn-outline">Customize</Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProductDetail
