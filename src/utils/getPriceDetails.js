// method to calculate % of discount on product
export function getDiscountPercentage(price, originalPrice) {
  return Math.floor(Math.abs((price / originalPrice) * 100 - 100));
}
// method to calculate cart price
export function getCartValues(cart) {
  return cart.reduce(
    ({ cartPrice, discount }, { price, originalPrice, qty }) => {
      cartPrice += originalPrice * qty;
      discount += (originalPrice - price) * qty;
      return { cartPrice, discount };
    },
    { cartPrice: 0, discount: 0 }
  );
}
