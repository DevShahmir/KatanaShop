import { useState, useMemo, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  motion,
  AnimatePresence,
  useSpring,
  useMotionValueEvent,
  LayoutGroup,
} from "framer-motion"
import "./CustomizePage.css"

const BASE_PRICE = 899

const bladeLengths = [
  { id: "short", label: '27" Wakizashi', add: 0 },
  { id: "standard", label: '29" Katana', add: 150 },
  { id: "long", label: '31" Odachi', add: 300 },
]

const materials = [
  { id: "carbon", label: "Carbon Steel", add: 0 },
  { id: "damascus", label: "Damascus", add: 450 },
  { id: "tamahagane", label: "Tamahagane", add: 1200 },
]

const handleColors = [
  { id: "black", color: "#141414", border: "#2a2a2a", label: "Midnight" },
  { id: "red", color: "#3d0a0a", border: "#5c1515", label: "Crimson" },
  { id: "gold", color: "#3a3218", border: "#5c4e20", label: "Imperial" },
  { id: "white", color: "#d8d4c8", border: "#b8b4a8", label: "Ivory" },
]

const formatAddon = (add: number) => {
  if (add === 0) return "Included"
  return `+$${add.toLocaleString()}`
}

const AnimatedPrice = ({ value }: { value: number }) => {
  const spring = useSpring(value, { stiffness: 90, damping: 28, mass: 0.8 })
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    spring.set(value)
  }, [value, spring])

  useMotionValueEvent(spring, "change", (latest) => {
    setDisplay(Math.round(latest))
  })

  return (
    <motion.span
      className="customize__price-value"
      key={display}
      initial={{ opacity: 0.6, filter: "blur(4px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      ${display.toLocaleString()}
    </motion.span>
  )
}

type OptionRowProps = {
  label: string
  price: string
  active: boolean
  onClick: () => void
  layoutId: string
}

const OptionRow = ({ label, price, active, onClick, layoutId }: OptionRowProps) => (
  <motion.button
    type="button"
    className={`customize__row ${active ? "customize__row--active" : ""}`}
    onClick={onClick}
    whileHover={{ borderColor: "rgba(255,255,255,0.22)" }}
    whileTap={{ scale: 0.995 }}
    transition={{ duration: 0.25 }}
  >
    {active && (
      <motion.span
        className="customize__row-glow"
        layoutId={layoutId}
        transition={{ type: "spring", stiffness: 380, damping: 32 }}
      />
    )}
    <span className="customize__row-label">{label}</span>
    <span className={`customize__row-price ${price === "Included" ? "customize__row-price--included" : ""}`}>
      {price}
    </span>
  </motion.button>
)

const CustomizePage = () => {
  const [length, setLength] = useState(bladeLengths[1].id)
  const [material, setMaterial] = useState(materials[0].id)
  const [handle, setHandle] = useState(handleColors[0].id)

  const totalPrice = useMemo(() => {
    const lengthAdd = bladeLengths.find((l) => l.id === length)?.add ?? 0
    const materialAdd = materials.find((m) => m.id === material)?.add ?? 0
    return BASE_PRICE + lengthAdd + materialAdd
  }, [length, material])

  const selectedLength = bladeLengths.find((x) => x.id === length)!
  const selectedMaterial = materials.find((x) => x.id === material)!
  const selectedHandle = handleColors.find((x) => x.id === handle)!

  const summaryLine = `${selectedLength.label} · ${selectedMaterial.label} · ${selectedHandle.label} wrap`

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  return (
    <div className="customize">
      <div className="customize__ambient" aria-hidden="true" />
      <div className="customize__container">
        <motion.header
          className="customize__hero"
          variants={pageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="customize__eyebrow" variants={fadeUp}>
            Commission <span className="customize__eyebrow-dot">·</span> 鍛冶
          </motion.p>

          <motion.div className="customize__title-wrap" variants={fadeUp}>
            <span className="customize__title-watermark" aria-hidden="true">刀</span>
            <h1 className="customize__title">Forge Your Blade</h1>
          </motion.div>

          <motion.div className="customize__tagline" variants={fadeUp}>
            <span className="customize__tagline-bar" />
            <p>Every element. Your vision. Forged once.</p>
          </motion.div>
        </motion.header>

        <motion.div
          className="customize__layout"
          variants={pageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="customize__controls" variants={fadeUp}>
            <section className="customize__section">
              <div className="customize__section-head">
                <span>Blade Length</span>
                <span className="customize__section-line" />
              </div>
              <LayoutGroup id="length">
                <div className="customize__rows">
                  {bladeLengths.map((opt) => (
                    <OptionRow
                      key={opt.id}
                      layoutId="length-active"
                      label={opt.label}
                      price={formatAddon(opt.add)}
                      active={length === opt.id}
                      onClick={() => setLength(opt.id)}
                    />
                  ))}
                </div>
              </LayoutGroup>
            </section>

            <section className="customize__section">
              <div className="customize__section-head">
                <span>Blade Material</span>
                <span className="customize__section-line" />
              </div>
              <LayoutGroup id="material">
                <div className="customize__rows">
                  {materials.map((opt) => (
                    <OptionRow
                      key={opt.id}
                      layoutId="material-active"
                      label={opt.label}
                      price={formatAddon(opt.add)}
                      active={material === opt.id}
                      onClick={() => setMaterial(opt.id)}
                    />
                  ))}
                </div>
              </LayoutGroup>
            </section>

            <section className="customize__section">
              <div className="customize__section-head">
                <span>Handle Wrap</span>
                <span className="customize__section-line" />
              </div>
              <div className="customize__swatches">
                {handleColors.map((opt) => (
                  <motion.button
                    key={opt.id}
                    type="button"
                    className={`customize__swatch ${handle === opt.id ? "customize__swatch--active" : ""}`}
                    onClick={() => setHandle(opt.id)}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  >
                    <span
                      className="customize__swatch-color"
                      style={{
                        background: opt.color,
                        boxShadow: `inset 0 0 0 1px ${opt.border}`,
                      }}
                    />
                    <span className="customize__swatch-label">{opt.label}</span>
                    {handle === opt.id && (
                      <motion.span
                        className="customize__swatch-ring"
                        layoutId="handle-ring"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </section>
          </motion.div>

          <motion.aside
            className="customize__commission"
            variants={fadeUp}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="customize__commission-watermark" aria-hidden="true">刀</span>

            <p className="customize__commission-label">Your Commission</p>

            <AnimatePresence mode="wait">
              <motion.p
                key={summaryLine}
                className="customize__commission-summary"
                initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                {summaryLine}
              </motion.p>
            </AnimatePresence>

            <motion.div
              className="customize__blade-line"
              key={length + material}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="customize__blade-line-core" />
            </motion.div>

            <ul className="customize__specs">
              <AnimatePresence mode="popLayout">
                <motion.li
                  key={`len-${length}`}
                  layout
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Length</span>
                  <span>{selectedLength.label}</span>
                </motion.li>
                <motion.li
                  key={`mat-${material}`}
                  layout
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Steel</span>
                  <span>{selectedMaterial.label}</span>
                </motion.li>
                <motion.li
                  key={`wrap-${handle}`}
                  layout
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Wrap</span>
                  <span>{selectedHandle.label}</span>
                </motion.li>
              </AnimatePresence>
              <li>
                <span>Lead Time</span>
                <span>120 days</span>
              </li>
            </ul>

            <div className="customize__price-box">
              <p className="customize__price-label">Estimated Forge Price</p>
              <div className="customize__price-display">
                <AnimatedPrice value={totalPrice} />
              </div>
              <p className="customize__price-footnote">Includes fitting &amp; lacquer</p>
            </div>

            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Link to="/order" className="customize__cta">
                <span>Proceed to Order</span>
                <motion.span
                  className="customize__cta-arrow"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.aside>
        </motion.div>
      </div>
    </div>
  )
}

export default CustomizePage
