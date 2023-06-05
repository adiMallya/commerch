export const CheckoutPrice = ({ cart, priceDetails, checkoutBtn }) => {
  const { cartPrice, discount, convenienceFee, totalAmt } = priceDetails;

  return (
    <section className="checkout__container--item price-card">
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
      <div className="cta-container">
        <button
          className="btn btn--primary-solid checkout-btn"
          onClick={checkoutBtn}
        >
          Continue
        </button>
      </div>
    </section>
  );
};
