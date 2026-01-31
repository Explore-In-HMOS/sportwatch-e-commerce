// Wishlist module for managing favorite items - ES5 compatible

export function initWishlist() {
  if (!globalThis.wishlist) {
    globalThis.wishlist = {
      items: []
    };
  }
}

function getWishlist() {
  initWishlist();
  return globalThis.wishlist;
}

export function getItems() {
  return getWishlist().items;
}

export function getItemCount() {
  return getWishlist().items.length;
}

export function isInWishlist(productId) {
  var items = getWishlist().items;
  for (var i = 0; i < items.length; i++) {
    if (items[i].productId === productId) {
      return true;
    }
  }
  return false;
}

export function toggleItem(productId, title, price, imageId) {
  var wishlist = getWishlist();
  var index = -1;

  for (var i = 0; i < wishlist.items.length; i++) {
    if (wishlist.items[i].productId === productId) {
      index = i;
      break;
    }
  }

  if (index > -1) {
    wishlist.items.splice(index, 1);
    return false;
  }

  wishlist.items.unshift({
    productId: productId,
    productTitle: title,
    productPrice: price,
    imageId: imageId,
    addedAt: new Date().toISOString()
  });
  return true;
}

export function removeItem(productId) {
  var wishlist = getWishlist();
  var index = -1;

  for (var i = 0; i < wishlist.items.length; i++) {
    if (wishlist.items[i].productId === productId) {
      index = i;
      break;
    }
  }

  if (index > -1) {
    wishlist.items.splice(index, 1);
    return true;
  }
  return false;
}

export function clearWishlist() {
  globalThis.wishlist = {
    items: []
  };
}
