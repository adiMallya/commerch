import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDataContext } from "../../contexts";
import { ACTION_TYPE } from "../../utils";
import { CartCard } from "./components/CartCard";
import { CartPrice } from "./components/CartPrice";
import ShopBag from "../../assets/shop-bag.svg";
import "./Cart.css";

export function Cart() {
  const { cart, wishlist, dispatch } = useDataContext();

  const cartIsNotEmpty = cart.length > 0;
  const wishlistIsNotEmpty = wishlist.length > 0;

  useEffect(() => {
    document.title = "commerch | bag";
  }, []);

  return (
    <main className="page">
      <div className="cart-layout">
        <div className="cart__container">
          <section className="cart__container--item">
            {cartIsNotEmpty && (
              <div className="cart__container--header page-heading">
                <h3>My Bag</h3>
                <span
                  role="button"
                  className="btn link-text--secondary"
                  title="Delete All"
                  onClick={() => dispatch({ type: ACTION_TYPE.CLEAR_CART })}
                >
                  Clear All
                </span>
              </div>
            )}

            {cartIsNotEmpty ? (
              cart.map((item) => <CartCard key={item._id} product={item} />)
            ) : (
              <div className="cart__fallback">
                <img src={ShopBag} alt="bag-image" className="img-res" />
                <p className="text-center">
                  There is nothing in your bag. Let's add some items.
                </p>
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
          </section>
          {cartIsNotEmpty && <CartPrice />}
        </div>
      </div>
    </main>
  );
}
