import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaHeart, FaUser } from "react-icons/fa";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { useDataContext, useAuthContext } from "../../contexts";
import "./Navbar.css";
import { ACTION_TYPE } from "../../utils";
import { useState } from "react";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setDrawerOpen, cart, wishlist, dispatch } = useDataContext();
  const { user } = useAuthContext();

  const [input, setInput] = useState("");

  const searchHandler = () => {
    if (input.length > 1 && input !== " ") {
      dispatch({
        type: ACTION_TYPE.SEARCH,
        payload: input,
      });
      navigate("/products");
    }
  };

  return (
    <header className="nav-header">
      <nav className="navbar">
        <div className="nav-section">
          {location.pathname.includes("products") && (
            <div
              className="navbar-toggler nav-section__items"
              onClick={() => setDrawerOpen((prev) => !prev)}
            >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          )}

          <div className="navbar-brand-title nav-section__items">
            <Link className="link-no-style" to="/">
              <h3>
                <span>com</span>merch
              </h3>
            </Link>
          </div>
        </div>
        <div className="nav-section search-container">
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search" className="search-bar">
              <span className="search-bar-btn" typeof="submit">
                <FaSearch title="Search" />
              </span>
              <input
                type="text"
                className="search-bar-input"
                placeholder="Type to search"
                name="search"
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={searchHandler}
                value={input}
              />
            </label>
          </form>
        </div>
        <ul className="nav-section list--style-none">
          <li className="list__inline-item">
            <NavLink className="nav-icon-link" to="/wishlist">
              <span className="nav-icon badge-container">
                <FaHeart title="Wishlist" />
                <span className="status-badge status-badge--count">
                  {wishlist.length}
                </span>
              </span>
            </NavLink>
          </li>
          <li className="list__inline-item">
            <NavLink className="nav-icon-link" to="/cart">
              <span className="nav-icon badge-container">
                <RiShoppingBag2Fill title="Bag" />
                <span className="status-badge status-badge--count">
                  {cart.length}
                </span>
              </span>
            </NavLink>
          </li>
          <li className="list__inline-item">
            <NavLink className="nav-icon-link" to="/account">
              {user?.token ? (
                <span className="nav-icon">
                  <FaUser title="Profile" />
                </span>
              ) : (
                <span className="login-btn">Login</span>
              )}
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
