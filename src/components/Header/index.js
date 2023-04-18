// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="nav-bar-content">
      <img
        className="website-logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      />
      <img
        className="logout-image"
        alt="nav logout"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
      />
      <div className="nav-item-desktop">
        <ul className="nav-item-desktop">
          <li className="nav-item">Home</li>
          <li className="nav-item">Products</li>
          <li className="nav-item">Cart</li>
        </ul>
        <button className="nav-logout-button" type="button">
          Logout
        </button>
      </div>
    </div>
    <div className="nav-bar-container-xs-s">
      <img
        className="app-logo"
        alt="nav home"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
      />
      <img
        className="app-logo"
        alt="nav products"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
      />
      <img
        className="app-logo"
        alt="nav cart"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
      />
    </div>
  </nav>
)

export default Header
