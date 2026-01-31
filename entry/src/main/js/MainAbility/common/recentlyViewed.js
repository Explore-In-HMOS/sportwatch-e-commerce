// Recently viewed module for quick access - ES5 compatible

export function initRecentlyViewed() {
  if (!globalThis.recentlyViewed) {
    globalThis.recentlyViewed = [];
  }
}

export function addRecentlyViewed(productId, title, price, imageId) {
  initRecentlyViewed();
  var items = globalThis.recentlyViewed;
  var existingIndex = -1;

  for (var i = 0; i < items.length; i++) {
    if (items[i].productId === productId) {
      existingIndex = i;
      break;
    }
  }

  if (existingIndex > -1) {
    items.splice(existingIndex, 1);
  }

  items.unshift({
    productId: productId,
    productTitle: title,
    productPrice: price,
    imageId: imageId,
    viewedAt: new Date().toISOString()
  });

  if (items.length > 10) {
    items.length = 10;
  }
}

export function getRecentlyViewed(limit) {
  initRecentlyViewed();
  var max = limit || 4;
  return globalThis.recentlyViewed.slice(0, max);
}

export function clearRecentlyViewed() {
  globalThis.recentlyViewed = [];
}
