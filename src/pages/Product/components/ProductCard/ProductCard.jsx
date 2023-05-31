import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import { RiShoppingBag2Fill } from "react-icons/ri";

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
  const { token } = useAuthContext();
  const { cart, wishlist, dispatch } = useDataContext();
  const [btnDisabled, setBtnDisabled] = useState(false);

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
        : addToCart(token, product, dispatch, setBtnDisabled)
      : navigate("/login");
  };

  const moveToWishlistHandler = () => {
    token
      ? inWishlist
        ? removeFromWishlist(_id, token, dispatch)
        : addToWishlist(token, product, dispatch, setBtnDisabled)
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
            <button
              className="btn btn--primary-icon wishlist-btn"
              onClick={moveToWishlistHandler}
              disabled={btnDisabled}
            >
              <FaHeart
                title="Add To Wishlist"
                className={inWishlist && "liked"}
              />
            </button>
          </div>
          <div className="card-price">
            <span className="disc-price">₹ {price}</span>
            <span className="orig-price">₹ {originalPrice}</span>
            <span className="disc-percent">{`(${percentageOff}% OFF)`}</span>
          </div>
        </div>
        <div className="cta-container">
          <button
            className="btn btn--primary-text-icon add-btn"
            onClick={addToCartHandler}
            disabled={btnDisabled}
          >
            {inCart ? (
              <span role="button" className="btn-icon">
                {" "}
                Go To Bag
              </span>
            ) : (
              <span role="button" className="btn-icon">
                <RiShoppingBag2Fill /> Add To Bag
              </span>
            )}
          </button>
        </div>

        {!inStock && (
          <div className="overlay-text">
            <div className="text-container">Out Of Stock</div>
          </div>
        )}
      </div>
    </div>
  );
};
