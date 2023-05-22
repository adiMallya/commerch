export function isItemInCart(id, cart) {
  return cart?.some((item) => item._id === id);
}

export function isItemInWishlist(id, wishlist) {
  return wishlist?.some((item) => item._id === id);
}
