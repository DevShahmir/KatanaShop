import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__mist" />
      <div className="footer__inner">
        <div className="footer__grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="footer__brand-kanji">刀匠</div>
            <div className="footer__brand-name">KatanaShop</div>
            <p className="footer__tagline">
              Master-forged blades from the Edo period tradition. Each katana carries
              centuries of craftsmanship into the modern age.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="footer__heading">Navigate</h4>
            <ul className="footer__links">
              <li><Link to="/" className="footer__link">Home</Link></li>
              <li><Link to="/products" className="footer__link">Collection</Link></li>
              <li><Link to="/customize" className="footer__link">Customize</Link></li>
              <li><Link to="/order" className="footer__link">Order</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="footer__heading">Connect</h4>
            <div className="footer__social">
              <a href="#" className="footer__social-btn" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" className="footer__social-btn" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="footer__social-btn" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer__haiku"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="footer__haiku-jp">古池や　蛙飛び込む　水の音</p>
          <p className="footer__haiku-en">
            An ancient pond — a frog leaps in, the sound of water
          </p>
        </motion.div>

        <div className="footer__bottom">
          <span>© 2026 KatanaShop. All blades forged with honor.</span>
          <span className="footer__seal">誠 · 忠 · 勇</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
