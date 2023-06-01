import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

import { useAuthContext, useDataContext } from "../../contexts";
import { ACTION_TYPE, getDiscountPercentage, isItemInCart } from "../../utils";
import { addToCart, removeFromWishlist, updateQtyInCart } from "../../services";

export const WishlistCard = ({ product }) => {
  const navigate = useNavigate();
  const { token } = useAuthContext();
  const { cart, dispatch } = useDataContext();
  const [btnDisabled, setBtnDisabled] = useState(false);

  const {
    _id,
    img,
    brand,
    name,
    price,
    originalPrice,
    averageRating,
    inStock,
  } = product;

  const percentageOff = getDiscountPercentage(price, originalPrice);

  const moveToCartHandler = () => {
    if (isItemInCart(product._id, cart)) {
      updateQtyInCart(product._id, token, "increment", dispatch);
      dispatch({
        type: ACTION_TYPE.SHOW_TOAST,
        payload: "Already in Cart. Updated!",
      });
    } else {
      addToCart(token, product, dispatch, setBtnDisabled);
      removeFromWishlist(product._id, token, dispatch);
    }
  };

  const removeFromWishlistHandler = () => {
    removeFromWishlist(product._id, token, dispatch);
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
          <span
            className="badge btn--remove"
            role="button"
            onClick={removeFromWishlistHandler}
          >
            <GrClose title="Remove" />
          </span>

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
          </div>
          <div className="card-price">
            <span className="disc-price">₹ {price}</span>
            <span className="orig-price">₹ {originalPrice}</span>
            <span className="disc-percent">{`(${percentageOff}% OFF)`}</span>
          </div>
        </div>
        <button
          className="btn btn--primary-outline add-btn"
          onClick={moveToCartHandler}
          disabled={btnDisabled}
        >
          Move To Bag
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
