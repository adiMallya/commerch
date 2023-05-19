// method to sort data by order
export function getSortedData(products, sortBy) {
  let sortedData = [...products];
  switch (sortBy) {
    case "LOW_TO_HIGH":
      sortedData = sortedData.sort((a, b) => Number(a.price) - Number(b.price));
      break;
    case "HIGH_TO_LOW":
      sortedData = sortedData.sort((a, b) => Number(b.price) - Number(a.price));
      break;
    default:
      sortedData = sortedData;
  }
  return sortedData;
}
// method to filter data by filters
export function getFilteredData(
  products,
  ratingRange,
  selectedCategory,
  inStock,
  searchValue
) {
  let filteredData = [];

  filteredData = products.filter((item) => (inStock ? item.inStock : true));

  filteredData = filteredData.filter(
    (item) => Number(item.averageRating) >= Number(ratingRange)
  );

  filteredData = filteredData.filter(
    (item) =>
      item.name.toLowerCase().startsWith(searchValue) ||
      item.brand.toLowerCase().startsWith(searchValue) ||
      item.category.toLowerCase().startsWith(searchValue)
  );

  if (selectedCategory.length) {
    filteredData = filteredData.filter((item) =>
      selectedCategory.every((cat) => cat === item.category)
    );
  }

  return filteredData;
}
