// Cart module for managing shopping cart state - ES5 compatible

export function initCart() {
  if (!globalThis.cart) {
    globalThis.cart = {
      items: [],
      nextId: 1
    };
  }
  updateCartTotals();
}

export function getCart() {
  if (!globalThis.cart) {
    initCart();
  }
  return globalThis.cart;
}

export function getCartItems() {
  return getCart().items;
}

export function getCartItemCount() {
  var count = 0;
  var items = getCart().items;
  for (var i = 0; i < items.length; i++) {
    count += items[i].quantity;
  }
  return count;
}

export function addToCart(product, quantity) {
  var qty = quantity || 1;
  var cart = getCart();
  var existingItem = null;

  for (var i = 0; i < cart.items.length; i++) {
    if (cart.items[i].product.id === product.id) {
      existingItem = cart.items[i];
      break;
    }
  }

  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    cart.items.push({
      id: cart.nextId++,
      product: product,
      quantity: qty,
      shipping: Math.floor(Math.random() * 5) + 1
    });
  }

  updateCartTotals();
  return true;
}

export function removeFromCart(itemId) {
  var cart = getCart();
  var index = -1;

  for (var i = 0; i < cart.items.length; i++) {
    if (cart.items[i].id === itemId) {
      index = i;
      break;
    }
  }

  if (index > -1) {
    cart.items.splice(index, 1);
    updateCartTotals();
    return true;
  }
  return false;
}

export function updateQuantity(itemId, quantity) {
  var cart = getCart();
  var item = null;

  for (var i = 0; i < cart.items.length; i++) {
    if (cart.items[i].id === itemId) {
      item = cart.items[i];
      break;
    }
  }

  if (item) {
    if (quantity <= 0) {
      return removeFromCart(itemId);
    }
    item.quantity = quantity;
    updateCartTotals();
    return true;
  }
  return false;
}

export function increaseQuantity(itemId) {
  var cart = getCart();
  var item = null;

  for (var i = 0; i < cart.items.length; i++) {
    if (cart.items[i].id === itemId) {
      item = cart.items[i];
      break;
    }
  }

  if (item) {
    item.quantity += 1;
    updateCartTotals();
    return true;
  }
  return false;
}

export function decreaseQuantity(itemId) {
  var cart = getCart();
  var item = null;

  for (var i = 0; i < cart.items.length; i++) {
    if (cart.items[i].id === itemId) {
      item = cart.items[i];
      break;
    }
  }

  if (item) {
    if (item.quantity <= 1) {
      return removeFromCart(itemId);
    }
    item.quantity -= 1;
    updateCartTotals();
    return true;
  }
  return false;
}

export function updateCartTotals() {
  var cart = getCart();
  var subtotal = 0;
  var shipping = 0;

  for (var i = 0; i < cart.items.length; i++) {
    var item = cart.items[i];
    subtotal += item.product.price * item.quantity;
    shipping += item.shipping;
  }

  globalThis.cartSubtotal = subtotal;
  globalThis.cartShipping = shipping;
  globalThis.cartTotal = subtotal + shipping;
}

export function getSubtotal() {
  return globalThis.cartSubtotal || 0;
}

export function getShipping() {
  return globalThis.cartShipping || 0;
}

export function getTotal() {
  return globalThis.cartTotal || 0;
}

export function clearCart() {
  globalThis.cart = {
    items: [],
    nextId: 1
  };
  updateCartTotals();
}

export function isInCart(productId) {
  var items = getCart().items;
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.id === productId) {
      return true;
    }
  }
  return false;
}

export function getCartItemByProductId(productId) {
  var items = getCart().items;
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.id === productId) {
      return items[i];
    }
  }
  return null;
}
