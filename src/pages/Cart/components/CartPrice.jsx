import { useDataContext } from "../../../contexts";
import { getCartValues } from "../../../utils/getPriceDetails";

export const CartPrice = () => {
  const { cart } = useDataContext();

  const { cartPrice, discount } = getCartValues(cart);

  const convenienceFee = cartPrice > 2000 ? 0 : 99;

  const totalPrice = parseFloat(cartPrice - discount + convenienceFee).toFixed(
    2
  );

  const totalDiscount = parseFloat(discount).toFixed(2);

  return (
    <section className="price-card">
      <div className="price-card--title" role="heading">
        <span>Price Details</span>
        <span className="">{`(${cart.length} ${
          cart.length > 1 ? "items" : "item"
        })`}</span>
      </div>
      <div className="price-details">
        <div className="row">
          <span role="label">Total MRP</span>
          <span className="price-mrp">{`₹${cartPrice}`}</span>
        </div>
        <div className="row">
          <span role="label">Discount on MRP</span>
          <span className="price-discount">- {discount}</span>
        </div>
        <div className="row">
          <span role="label">Convenience Fee</span>
          <span className="price-ship">
            <span className={convenienceFee === 0 ? "strike-price" : ""}>
              ₹99
            </span>{" "}
            {convenienceFee === 0 && <span className="price-free">FREE</span>}
          </span>
        </div>
      </div>
      <div className="row total-amt">
        <span role="label">Total Amount</span>
        <span className="price-total">{`₹${totalPrice}`}</span>
      </div>
      <p className="cart-message">
        You will save ₹{totalDiscount} on this order
      </p>
      <div className="cta-container">
        <button className="btn btn--primary-solid checkout-btn">
          Place Order
        </button>
      </div>
    </section>
  );
};
