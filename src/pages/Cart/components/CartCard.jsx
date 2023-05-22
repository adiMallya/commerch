import { useNavigate } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";

import { useAuthContext, useDataContext } from "../../../contexts";
import { getDiscountPercentage, isItemInWishlist } from "../../../utils";
import {
  addToWishlist,
  updateQtyInCart,
  removeFromCart,
} from "../../../services";

export const CartCard = ({ product }) => {
  const navigate = useNavigate();
  const {
    user: { token },
  } = useAuthContext();
  const { wishlist, dispatch } = useDataContext();

  const { _id, img, brand, name, price, originalPrice, qty } = product;

  const percentageOff = getDiscountPercentage(price, originalPrice);

  const inWishlist = isItemInWishlist(product._id, wishlist);

  const removeFromCartHandler = () =>
    removeFromCart(product._id, token, dispatch);

  const moveToWishlistHandler = () => {
    inWishlist
      ? navigate("/wishlist")
      : addToWishlist(token, product, dispatch);
  };

  const updateItemQtyHandler = (type) => {
    product.qty < 1
      ? removeFromCart(product._id, token, dispatch)
      : updateQtyInCart(product._id, token, type, dispatch);
  };

  return (
    <div key={_id} className="cart-card">
      <div className="card-horizontal">
        <div className="image-container">
          <img src={img} alt={name} className="img-res" />
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
          <div className="cart-qty">
            <button
              className="btn qty-btn"
              onClick={() => updateItemQtyHandler("decrement")}
            >
              <FaMinus />
            </button>
            <span className="qty-value">{qty}</span>
            <button
              className="btn qty-btn"
              onClick={() => updateItemQtyHandler("increment")}
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
      <div className="cta-container">
        <button
          className="btn btn--secondary-outline"
          onClick={removeFromCartHandler}
        >
          Remove
        </button>
        <button
          className="btn btn--primary-outline"
          onClick={moveToWishlistHandler}
        >
          {inWishlist ? "Already In Wishlist" : "Move To Wishlist"}
        </button>
      </div>
    </div>
  );
};
