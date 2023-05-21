// method to calculate % of discount on product
export function getDiscountPercentage(price, originalPrice) {
  return Math.floor(Math.abs((price / originalPrice) * 100 - 100));
}
