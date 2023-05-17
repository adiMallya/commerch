import { FaRegHeart, FaStar, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();

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

  return (
    <div key={_id} className="card">
      <div className={!inStock ? "overlay-container" : ""}>
        <div className="img-container badge-container">
          <img
            src={img}
            alt={name}
            className="img-res card-img"
            onClick={() => navigate(`/products/${_id}`)}
            loading="lazy"
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
            <span role="button" className="wishlist-btn">
              <FaRegHeart
                title="Add To Wishlist"
                className="wishlist-btn--fill"
              />
            </span>
          </div>
          <div className="card-price">
            <p className="disc-price">₹ {price}</p>
            <p className="orig-price">₹ {originalPrice}</p>
            <p className="disc-percent">{`(35% OFF)`}</p>
          </div>
        </div>
        <button className="btn btn--primary-text-icon add-btn">
          <span className="btn-icon">
            <FaShoppingCart />
          </span>
          Add To Cart
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
