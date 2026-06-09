import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import KatanaLogo from "./KatanaLogo"
import "./Navbar.css"

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Collection" },
  { to: "/customize", label: "Customize" },
  { to: "/order", label: "Order" },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo">
            <KatanaLogo size={36} className="navbar__logo-icon" />
            <span className="navbar__brand">KatanaShop</span>
          </Link>

          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`navbar__link ${location.pathname === link.to ? "navbar__link--active" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <button type="button" className="navbar__cart" aria-label="Cart">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6h15l-1.5 9h-12L6 6z" />
                <path d="M6 6L5 3H2" />
                <circle cx="9" cy="20" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="18" cy="20" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </button>

            <button
              type="button"
              className="navbar__burger"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </motion.nav>

      <motion.div
        className={`navbar__mobile-menu ${menuOpen ? "navbar__mobile-menu--open" : ""}`}
        initial={false}
        animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.35 }}
      >
        {navLinks.map((link, i) => (
          <motion.div
            key={link.to}
            initial={{ opacity: 0, x: 20 }}
            animate={menuOpen ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.06 }}
          >
            <Link
              to={link.to}
              className={`navbar__mobile-link ${location.pathname === link.to ? "navbar__mobile-link--active" : ""}`}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}

export default Navbar
