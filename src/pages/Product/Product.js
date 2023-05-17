import { useEffect } from "react";

import { useDataContext } from "../../contexts";
import { ProductCard } from "./components/ProductCard/ProductCard";
import "./Product.css";

export function Product() {
  const { products } = useDataContext();

  useEffect(() => {
    document.title = "commerch | products";
  }, []);

  return (
    <main className="products__container">
      <div className="grid-view">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </main>
  );
}
