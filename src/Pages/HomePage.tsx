import { Link } from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Products } from "../Data/ProductDetail"
import ProductCard from "./Product"
import "./HomePage.css"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const HomePage = () => {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const featured = Products.filter((p) => p.inStock).slice(0, 3)

  return (
    <>
      <section className="hero" ref={heroRef}>
        <motion.div className="hero__bg" style={{ y: bgY }} />
        <div className="mist-overlay" />

        <motion.div className="hero__content" style={{ opacity: heroOpacity }}>
          <motion.p
            className="hero__era"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Edo Period · 江戸時代
          </motion.p>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Forged in Honor
          </motion.h1>

          <motion.p
            className="hero__title-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            武士の魂
          </motion.p>

          <div className="hero__blade-wrap">
            <motion.div
              className="hero__blade-glow"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div
              className="hero__blade"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <motion.p
            className="hero__desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            Museum-grade katanas handcrafted by master swordsmiths.
            Each blade tells a story of discipline, artistry, and war.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15 }}
          >
            <Link to="/products" className="btn-primary">Explore Collection</Link>
            <Link to="/customize" className="btn-outline">Commission Blade</Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <span>Scroll</span>
          <motion.div
            className="hero__scroll-line"
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      <section className="featured">
        <div className="container">
          <motion.div
            className="featured__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Featured Blades</p>
            <h2 className="section-title">Masterworks of the Forge</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Hand-selected pieces from our finest collection — each awaiting its warrior.
            </p>
          </motion.div>

          <motion.div
            className="featured__grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {featured.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>

          <motion.div
            className="featured__cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/products" className="btn-outline">View Full Collection</Link>
          </motion.div>
        </div>
      </section>

      <section className="lore">
        <div className="mist-overlay" />
        <div className="container lore__inner">
          <motion.div
            className="lore__visual"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1599640848375-a7664ed447a3?w=800&q=80"
              alt="Traditional Japanese swordsmith at work"
            />
            <div className="lore__visual-frame" />
          </motion.div>

          <motion.div
            className="lore__text"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="section-label">The Way of the Blade</p>
            <h2 className="section-title">Centuries of Craft</h2>
            <p className="section-subtitle">
              In the 17th century, Japanese swordsmiths perfected the art of tamahagane —
              folding steel thousands of times to create blades of impossible sharpness and beauty.
              Our forge honors this legacy with every strike of the hammer.
            </p>
            <div className="divider-gold" style={{ margin: "1.5rem 0" }} />
            <p className="section-subtitle">
              From ceremonial daishō sets to battle-ready wakizashi, each piece undergoes
              120 days of forging, polishing, and mounting before it earns the KatanaShop seal.
            </p>

            <div className="lore__stats">
              <div>
                <div className="lore__stat-value">120+</div>
                <div className="lore__stat-label">Days to Forge</div>
              </div>
              <div>
                <div className="lore__stat-value">16th</div>
                <div className="lore__stat-label">Century Methods</div>
              </div>
              <div>
                <div className="lore__stat-value">∞</div>
                <div className="lore__stat-label">Folds of Steel</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default HomePage
