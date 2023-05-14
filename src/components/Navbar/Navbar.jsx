import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <header className="nav-header">
      <nav className="navbar">
        <div className="nav-section">
          <div className="navbar-toggler nav-section__items">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>

          <div className="navbar-brand-title nav-section__items">
            <Link className="link-no-style" to="/">
              <h3>
                <span>com</span>merch
              </h3>
            </Link>
          </div>
        </div>
        <div className="nav-section search-container">
          <form action="#">
            <label htmlFor="search" className="search-bar">
              <span className="search-bar-btn" typeof="submit">
                <FaSearch title="Search" />
              </span>
              <input
                type="text"
                className="search-bar-input"
                placeholder="Type to search"
                name="search"
              />
            </label>
          </form>
        </div>
        <ul className="nav-section list--style-none">
          <li className="list__inline-item">
            <NavLink className="nav-icon-link" to="/wishlist">
              <span className="nav-icon badge-container">
                <FaHeart title="Wishlist" />
                <span className="status-badge status-badge--count">0</span>
              </span>
            </NavLink>
          </li>
          <li className="list__inline-item">
            <NavLink className="nav-icon-link" to="/cart">
              <span className="nav-icon badge-container">
                <FaShoppingCart title="Cart" />
                <span className="status-badge status-badge--count">0</span>
              </span>
            </NavLink>
          </li>
          <li className="list__inline-item">
            <NavLink className="nav-icon-link" to="/profile">
              {/* <span className="nav-icon">
                <FaUser title="Profile" />
              </span> */}
              <span className="login-btn">Login</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="search-container search-mob">
        <form action="#">
          <label htmlFor="search" className="search-bar">
            <span className="search-bar-btn" typeof="submit">
              <FaSearch title="Search" />
            </span>
            <input
              type="text"
              className="search-bar-input"
              placeholder="Type to search"
              name="search"
            />
          </label>
        </form>
      </div>
    </header>
  );
};
