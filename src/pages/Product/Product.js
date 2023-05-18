import { useEffect } from "react";

import { useDataContext } from "../../contexts";
import { getSortedData, getFilteredData } from "../../utils";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { Filters } from "./components/Filters/Filters";
import "./Product.css";

export function Product() {
  const {
    products,
    filters: { sortBy, ratingRange, searchValue, inStock, categoryType },
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
    <main className="row">
      <Filters />
      <section className="products__container grid-view">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <>
            <h2>No Products Found</h2>
          </>
        )}
      </section>
    </main>
  );
}
