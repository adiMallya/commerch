import { useDataContext } from "../../../../contexts";
import { ACTION_TYPE } from "../../../../utils";
import "./Filters.css";

export const Filters = () => {
  const {
    categories,
    products,
    filters: { sortBy, ratingRange, inStock, categoryType, onSale },
    drawerOpen,
    setShowModal,
    dispatch,
  } = useDataContext();

  const listOfCategories = categories.reduce(
    (acc, { categoryName }) => [...acc, categoryName],
    []
  );

  const isSortCheck = (type) => sortBy && sortBy === type;

  const onChangeHandler = (actionType, actionPayload) => {
    dispatch({
      type: actionType,
      payload: actionPayload,
    });
  };

  return (
    <div className="filter__container">
      <div className="filter-header">
        <span className="filter-title" role="heading">
          Filters
        </span>
        <span
          className="clear-btn"
          role="button"
          onClick={() => {
            onChangeHandler(ACTION_TYPE.CLEAR_FILTER, products);
            setShowModal(false);
          }}
        >
          Clear All
        </span>
      </div>
      <div className="filter-category">
        <span className="filter-title" role="heading">
          Categories
        </span>
        <ul className="list list--style-none">
          {listOfCategories.map((category, index) => (
            <li key={index}>
              <label htmlFor={category} className="select-label">
                <input
                  type="checkbox"
                  name={category}
                  className="check-input"
                  onChange={(e) =>
                    onChangeHandler(ACTION_TYPE.TOGGLE_CATEGORY, e.target)
                  }
                  checked={categoryType.some((val) => val === category)}
                  value={category}
                />
                <span className="select-desc">{category}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-category">
        <span className="filter-title" role="heading">
          Customer Ratings
        </span>
        <div className="ratings-range">
          <input
            type="range"
            name="ratingRange"
            className="slider-input"
            onInput={(e) =>
              onChangeHandler(ACTION_TYPE.RATING_RANGE, e.target.value)
            }
            min="1.0"
            max="5.0"
            value={ratingRange}
          />
        </div>
        <div className="rating-limit">
          <span role="label" htmlFor="ratingRange">
            1.0
          </span>
          <span role="label" htmlFor="ratingRange">
            2.5
          </span>
          <span role="label" htmlFor="ratingRange">
            5.0
          </span>
        </div>
      </div>
      <div className="filter-category">
        <span className="filter-title" role="heading">
          Sort By
        </span>
        <div>
          <label htmlFor="sort_lth" className="select-label">
            <input
              type="radio"
              name="sortBy"
              id="sort_lth"
              className="radio-input"
              onChange={() =>
                onChangeHandler(ACTION_TYPE.SORT_BY, "LOW_TO_HIGH")
              }
              checked={isSortCheck("LOW_TO_HIGH")}
            />
            <span className="select-desc">Price - Low To High</span>
          </label>
          <label htmlFor="sort_htl" className="select-label">
            <input
              type="radio"
              name="sortBy"
              id="sort_htl"
              className="radio-input"
              onChange={() =>
                onChangeHandler(ACTION_TYPE.SORT_BY, "HIGH_TO_LOW")
              }
              checked={isSortCheck("HIGH_TO_LOW")}
            />
            <span className="select-desc">Price - High To Low</span>
          </label>
        </div>
      </div>
      <div className="filter-category">
        <span className="filter-title" role="heading">
          Others
        </span>
        <div>
          <label htmlFor="category" className="select-label">
            <input
              type="checkbox"
              name="category"
              className="check-input"
              onChange={() => dispatch({ type: ACTION_TYPE.TOGGLE_STOCK })}
              checked={!inStock}
            />
            <span className="select-desc">Include Out Of Stock</span>
          </label>
          <label htmlFor="category" className="select-label">
            <input
              type="checkbox"
              name="category"
              className="check-input"
              onChange={() => dispatch({ type: ACTION_TYPE.TOGGLE_SALE })}
              checked={onSale}
            />
            <span className="select-desc">Only On Sale</span>
          </label>
        </div>
      </div>
    </div>
  );
};
