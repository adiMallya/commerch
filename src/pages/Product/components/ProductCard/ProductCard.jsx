import { FaHeart, FaRegHeart, FaStar, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useAuthContext, useDataContext } from "../../../../contexts";
import {
  getDiscountPercentage,
  isItemInCart,
  isItemInWishlist,
} from "../../../../utils";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../../../services";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const {
    user: { token },
  } = useAuthContext();
  const { cart, wishlist, dispatch } = useDataContext();

  const {
    _id,
    img,
    brand,
    name,
    price,
    originalPrice,
    averageRating,
    onSale,
    inStock,
  } = product;

  const percentageOff = getDiscountPercentage(price, originalPrice);

  const inCart = isItemInCart(_id, cart);
  const inWishlist = isItemInWishlist(_id, wishlist);

  const addToCartHandler = () => {
    token
      ? inCart
        ? navigate("/cart")
        : addToCart(token, product, dispatch)
      : navigate("/login");
  };

  const moveToWishlistHandler = () => {
    token
      ? inWishlist
        ? removeFromWishlist(_id, token, dispatch)
        : addToWishlist(token, product, dispatch)
      : navigate("/login");
  };

  return (
    <div key={_id} className="card">
      <div className={!inStock ? "overlay-container" : ""}>
        <div className="img-container badge-container">
          <img
            src={img}
            alt={name}
            className="img-res card-img"
            onClick={() => navigate(`/products/${_id}`)}
          />
          {onSale && (
            <span className="badge bg-secondary badge--sale">On Sale</span>
          )}
          <span className="badge--rating">
            {averageRating}
            <FaStar className="star" />
          </span>
        </div>
        <div className="card-info">
          <div className="card-header">
            <div>
              <p className="card-brand">{brand}</p>
              <p className="card-desc">{name}</p>
            </div>
            <span
              role="button"
              className="wishlist-btn"
              onClick={moveToWishlistHandler}
            >
              <FaHeart
                title="Add To Wishlist"
                className={inWishlist && "liked"}
              />
            </span>
          </div>
          <div className="card-price">
            <span className="disc-price">₹ {price}</span>
            <span className="orig-price">₹ {originalPrice}</span>
            <span className="disc-percent">{`(${percentageOff}% OFF)`}</span>
          </div>
        </div>
        <button
          className="btn btn--primary-text-icon add-btn"
          onClick={addToCartHandler}
        >
          {inCart ? (
            "Go To Cart"
          ) : (
            <span role="button" className="btn-icon">
              <FaShoppingCart /> Add To Cart
            </span>
          )}
        </button>
        {!inStock && (
          <div className="overlay-text">
            <div className="text-container">Out Of Stock</div>
          </div>
        )}
      </div>
    </div>
  );
};
