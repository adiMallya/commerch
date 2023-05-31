import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { FaHeart, FaStar } from "react-icons/fa";

import { useAuthContext, useDataContext } from "../../contexts";
import {
  getDiscountPercentage,
  isItemInCart,
  isItemInWishlist,
} from "../../utils";
import { addToCart, addToWishlist } from "../../services";

export function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { token } = useAuthContext();
  const { products, cart, wishlist, dispatch } = useDataContext();
  const [btnDisabled, setBtnDisabled] = useState(false);

  const product = products?.find((product) => product._id === productId);

  const percentageOff = getDiscountPercentage(
    product?.price,
    product?.originalPrice
  );

  const inCart = isItemInCart(product?._id, cart);
  const inWishlist = isItemInWishlist(product?._id, wishlist);

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
        ? navigate("/wishlist")
        : addToWishlist(token, product, dispatch, setBtnDisabled)
      : navigate("/login");
  };

  return (
    <main className="page">
      <div className="product-detail__container">
        <div key={product?._id} className="product-grid">
          <div className="image-container badge-container">
            <img src={product?.img} alt={product?._id} className="img-res" />
            {product?.onSale && (
              <span className="badge bg-secondary badge--sale">On Sale</span>
            )}
          </div>
          <div className="card-info">
            <div className="card-header">
              <div>
                <p className="card-brand">{product?.brand}</p>
                <p className="card-name">{product?.name}</p>
                <span className="badge--rating">
                  {product?.averageRating}
                  <FaStar className="star" />
                </span>
              </div>
            </div>
            <div className="card-price">
              <span className="disc-price">₹ {product?.price}</span>
              <span className="orig-price">₹ {product?.originalPrice}</span>
              <span className="disc-percent">{`(${percentageOff}% OFF)`}</span>
            </div>
            <div className="display-flex">
              <button
                className="btn btn--primary-text-icon"
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
              <button
                className="btn btn--secondary-outline"
                onClick={moveToWishlistHandler}
                disabled={btnDisabled}
              >
                {inWishlist ? (
                  <span role="button" className="btn-icon">
                    {" "}
                    Go To Wishlist
                  </span>
                ) : (
                  <span role="button" className="btn-icon">
                    <FaHeart /> Add To Wishlist
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
