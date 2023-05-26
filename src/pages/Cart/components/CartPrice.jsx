import { useNavigate } from "react-router-dom";

import { useDataContext, useOrderContext } from "../../../contexts";
import { getCartValues } from "../../../utils/getPriceDetails";
import { ACTION_TYPE } from "../../../utils";

export const CartPrice = () => {
  const navigate = useNavigate();
  const { cart } = useDataContext();
  const { dispatch: orderDispatch } = useOrderContext();

  const { cartPrice, discount } = getCartValues(cart);

  const convenienceFee = cartPrice > 2000 ? 0 : 99;

  const totalAmt = parseFloat(cartPrice - discount + convenienceFee).toFixed(2);

  const totalDiscount = parseFloat(discount).toFixed(2);

  const checkoutHandler = () => {
    orderDispatch({
      type: ACTION_TYPE.ORDER_PRICE,
      payload: {
        cartPrice,
        discount,
        convenienceFee,
        totalAmt,
        totalDiscount,
      },
    });
    navigate("/checkout");
  };

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
        <span className="price-total">{`₹${totalAmt}`}</span>
      </div>
      <p className="cart-message">
        You will save ₹{totalDiscount} on this order
      </p>
      <div className="cta-container">
        <button
          className="btn btn--primary-solid checkout-btn"
          onClick={checkoutHandler}
        >
          Place Order
        </button>
      </div>
    </section>
  );
};
