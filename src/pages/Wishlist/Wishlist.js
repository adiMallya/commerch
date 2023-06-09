import { Link } from "react-router-dom";
import { useDataContext } from "../../contexts";
import "./Wishlist.css";
import { WishlistCard } from "./WishlistCard";
import { useEffect } from "react";
export function Wishlist() {
  const { wishlist } = useDataContext();

  const wishlistIsNotEmpty = wishlist.length > 0;

  useEffect(() => {
    document.title = "commerch | wishlist";
  }, []);

  return (
    <main className="page">
      <div className="wishlist-layout">
        <h3 className="page-heading" role="heading">
          My Wishlist{" "}
        </h3>
        {wishlistIsNotEmpty ? (
          <section className="grid-view">
            {wishlist.map((item) => (
              <WishlistCard key={item._id} product={item} />
            ))}
          </section>
        ) : (
          <div className="vertical-middle-self">
            <p>Your Wishlist is Empty</p>
            <Link className="btn btn--primary-outline" to="/products">
              Explore Products
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
