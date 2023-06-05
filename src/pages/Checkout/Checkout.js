import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDataContext, useOrderContext } from "../../contexts";
import { ACTION_TYPE } from "../../utils";
import { AddressModal } from "./components/AddressModal";
import { CheckoutPrice } from "./components/CheckoutPrice";
import "./Checkout.css";

export function Checkout() {
  const navigate = useNavigate();
  const { cart, address, dispatch: dataDispatch } = useDataContext();
  const { orderAddress, orderPrice, dispatch: orderDispatch } = useOrderContext();

  const [showModal, setShowModal] = useState(false);

  const placeOrder = () => {
    dataDispatch({ type: ACTION_TYPE.SHOW_LOADER, payload: true });
    dataDispatch({ type: ACTION_TYPE.CLEAR_CART });
    orderDispatch({ type: ACTION_TYPE.CLEAR_PRICE });
    setTimeout(() => {
      dataDispatch({
        type: ACTION_TYPE.SHOW_TOAST,
        payload: { type: "success", msg: "Order Placed! Shipping soon." },
      });
      navigate("/");
      dataDispatch({ type: ACTION_TYPE.SHOW_LOADER, payload: false });
    }, 1000);
  };

  useEffect(() => {
    cart.length === 0 && navigate("/products");
    document.title = "commerch | checkout";
  }, []);

  return (
    <main className="page">
      <div className="checkout-layout">
        <div className="checkout__container">
          <section className="checkout__container--item">
            {address.length && (
              <button
                className="btn btn--primary-outline"
                onClick={() => setShowModal(true)}
              >
                Select Delivery Address
              </button>
            )}
            <div className="checkout-address__container">
              <div>
                <input
                  type="radio"
                  name="selected-address"
                  className="select-addr"
                  defaultChecked={true}
                />
                <label htmlFor="selected-address" className="address-header">
                  {orderAddress?.name}
                </label>
              </div>
              <div className="address-details">
                <p>{`${orderAddress?.street}`}</p>
                <p>{`${orderAddress?.city} - ${orderAddress?.pincode}, ${orderAddress?.state}`}</p>
                <p>Mobile: {`+91 ${orderAddress?.phno}`}</p>
              </div>
            </div>
          </section>
          <CheckoutPrice cart={cart} priceDetails={orderPrice} checkoutBtn={placeOrder} />
        </div>
      </div>
      <AddressModal
        showForm={showModal}
        closeForm={() => setShowModal(false)}
      />
    </main>
  );
}
