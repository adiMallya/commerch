import { useEffect } from "react";

import { useDataContext } from "../../contexts";
import { getSortedData, getFilteredData } from "../../utils";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { Filters } from "./components/Filters/Filters";
import "./Product.css";

export function ProductList() {
  const {
    products,
    filters: { sortBy, ratingRange, searchValue, inStock, categoryType },
    setDrawerOpen,
  } = useDataContext();

  const sortedProducts = getSortedData(products, sortBy);
  const filteredProducts = getFilteredData(
    sortedProducts,
    ratingRange,
    categoryType,
    inStock,
    searchValue
  );

  useEffect(() => {
    document.title = "commerch | products";
  }, []);

  return (
    <main className="page" onClick={() => setDrawerOpen(false)}>
      {/* <div className="row"></div> */}
      <div className="row">
        <Filters />
        {filteredProducts.length < 1 ? (
          <section className="products__container">
            <h4>Sorry, no products matched...</h4>
          </section>
        ) : (
          <section className="products__container grid-view">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
