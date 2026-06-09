import { motion } from "framer-motion"
import "./OrderNow.css"

const OrderNow = () => {
  return (
    <div className="order">
      <div className="container">
        <motion.div
          className="order__header"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Commission Order</p>
          <h1 className="section-title">Place Your Order</h1>
          <p className="section-subtitle">
            Complete the form below. Our swordsmith will contact you within 48 hours.
          </p>
        </motion.div>

        <div className="order__layout">
          <motion.form
            className="order__form"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="order__field-row">
              <div className="order__field">
                <label className="order__label" htmlFor="firstName">First Name</label>
                <input className="order__input" id="firstName" type="text" placeholder="Takeshi" />
              </div>
              <div className="order__field">
                <label className="order__label" htmlFor="lastName">Last Name</label>
                <input className="order__input" id="lastName" type="text" placeholder="Yamamoto" />
              </div>
            </div>

            <div className="order__field">
              <label className="order__label" htmlFor="email">Email</label>
              <input className="order__input" id="email" type="email" placeholder="warrior@honor.jp" />
            </div>

            <div className="order__field">
              <label className="order__label" htmlFor="phone">Phone</label>
              <input className="order__input" id="phone" type="tel" placeholder="+81 90 0000 0000" />
            </div>

            <div className="order__field">
              <label className="order__label" htmlFor="address">Shipping Address</label>
              <textarea className="order__textarea" id="address" placeholder="Street, City, Prefecture, Postal Code" />
            </div>

            <div className="order__field">
              <label className="order__label" htmlFor="blade">Blade Selection</label>
              <select className="order__select" id="blade" defaultValue="">
                <option value="" disabled>Select a blade</option>
                <option value="custom">Custom Commission</option>
                <option value="collection">From Collection</option>
              </select>
            </div>

            <div className="order__field">
              <label className="order__label" htmlFor="notes">Special Instructions</label>
              <textarea className="order__textarea" id="notes" placeholder="Engraving, saya finish, delivery preferences..." />
            </div>

            <motion.button
              type="submit"
              className="btn-primary"
              style={{ width: "100%" }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Submit Order
            </motion.button>
          </motion.form>

          <motion.aside
            className="order__summary"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="order__summary-title">Order Summary</h3>

            <div className="order__summary-row">
              <span>Blade</span>
              <span>Custom Katana</span>
            </div>
            <div className="order__summary-row">
              <span>Material</span>
              <span>Carbon Steel</span>
            </div>
            <div className="order__summary-row">
              <span>Length</span>
              <span>29&quot; Katana</span>
            </div>
            <div className="order__summary-row">
              <span>Handle</span>
              <span>Midnight Wrap</span>
            </div>
            <div className="order__summary-row">
              <span>Forge Time</span>
              <span>120 days</span>
            </div>
            <div className="order__summary-row">
              <span>Shipping</span>
              <span>Complimentary</span>
            </div>

            <div className="order__summary-total">
              <span>Total</span>
              <span>$1,049.00</span>
            </div>

            <p className="order__summary-note">
              All orders are hand-forged to specification. A 50% deposit is required to begin forging.
              Balance due upon completion and inspection.
            </p>

            <div className="order__seal">誠</div>
          </motion.aside>
        </div>
      </div>
    </div>
  )
}

export default OrderNow
