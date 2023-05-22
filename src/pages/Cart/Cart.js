import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useAuthContext, useDataContext } from "../../contexts";
import { clearCart } from "../../services";
import ShopBag from "../../assets/shop-bag.svg";
import { CartCard } from "./components/CartCard";
import "./Cart.css";

export function Cart() {
  const { user: token } = useAuthContext();
  const { cart, wishlist, dispatch } = useDataContext();

  const cartIsNotEmpty = cart.length > 0;
  const wishlistIsNotEmpty = wishlist.length > 0;

  const clearCartHandler = () => clearCart(token, cart, dispatch);

  useEffect(() => {
    document.title = "commerch | bag";
  }, []);

  return (
    <main className="row">
      <div className="cart__container display-flex-column">
        {cartIsNotEmpty && (
          <div
            className="page-heading display-flex justify-between"
            role="heading"
          >
            <div className="display-flex">
              <h3>My Bag</h3>
              <span className="item-count">{`${wishlist.length} items`}</span>
            </div>
            <button
              className="btn link-text--primary"
              onClick={clearCartHandler}
            >
              Clear All
            </button>
          </div>
        )}
        {/* <div className="cart display-flex"> */}
        {cartIsNotEmpty ? (
          <section className="cart">
            {cart.map((item) => (
              <CartCard key={item._id} product={item} />
            ))}
          </section>
        ) : (
          <div className="vertical-middle-self">
            <img
              src={ShopBag}
              alt="bag-image"
              width={50}
              height={50}
              className="img-res"
            />
            <p>There is nothing in your bag. Let's add some items.</p>
            <div className="text-center">
              {wishlistIsNotEmpty ? (
                <Link className="btn btn--primary-outline" to="/wishlist">
                  Add items from Wishlist
                </Link>
              ) : (
                <Link className="btn btn--primary-outline" to="/products">
                  Explore Products
                </Link>
              )}
            </div>
          </div>
        )}
        {/* </div> */}
      </div>
      <div></div>
    </main>
  );
}
