import { useEffect } from "react";
import { BsFillFilterSquareFill } from "react-icons/bs";

import { Modal } from "../../components";
import { useDataContext } from "../../contexts";
import { getSortedData, getFilteredData } from "../../utils";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { Filters } from "./components/Filters/Filters";
import "./Product.css";

export function ProductList() {
  const {
    products,
    filters: {
      sortBy,
      ratingRange,
      searchValue,
      inStock,
      categoryType,
      onSale,
    },
    showModal,
    setShowModal,
  } = useDataContext();

  const sortedProducts = getSortedData(products, sortBy);
  const filteredProducts = getFilteredData(
    sortedProducts,
    ratingRange,
    categoryType,
    inStock,
    onSale,
    searchValue
  );

  useEffect(() => {
    document.title = "commerch | shop";
    document.documentElement.scrollTop = 0;
    setShowModal(false);
  }, []);

  return (
    <main className="page">
      <div className="row">
        <aside>
          <Filters />
        </aside>
        <section className="products__container">
          <div className="products__header">
            <span role="heading">
              {filteredProducts.length > 0 &&
                `Showing All Products (${filteredProducts.length})`}
            </span>
            <span
              className="filter-btn"
              role="button"
              onClick={() => setShowModal(true)}
            >
              <BsFillFilterSquareFill className="filter-icon" title="Filters" />
            </span>
          </div>
          {filteredProducts.length < 1 ? (
            <h4>Sorry, no products matched...</h4>
          ) : (
            <div className="grid-view">
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
      <Modal show={showModal} closeModal={() => setShowModal(false)}>
        <Filters />
        <div className="modal-footer">
          <button
            className="btn btn--secondary-solid"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
      </Modal>
    </main>
  );
}
