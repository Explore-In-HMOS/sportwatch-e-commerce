
var orderStatus = {
  PENDING: 'Pending',
  PROCESSING: 'Processing',
  SHIPPED: 'Shipped',
  DELIVERED: 'Delivered',
  CANCELLED: 'Cancelled'
};

var statusColors = {
  'pending': '#FFA500',
  'processing': '#007BFF',
  'shipped': '#17A2B8',
  'delivered': '#28A745',
  'cancelled': '#DC3545'
};

// Initialize globalThis order data - similar to cartData pattern
if (!globalThis.__orderData__) {
  globalThis.__orderData__ = {
    orders: [],
    nextOrderId: 1000,
    ready: true
  };
}

var orderData = globalThis.__orderData__;

function buildTrackingSteps() {
  return [
    { title: 'Order Placed',
description: 'We have received your order',
timestamp: new Date().toLocaleDateString(),
isCompleted: true,
isCurrent: false },
    { title: 'Processing',
description: 'Preparing your items',
timestamp: '',
isCompleted: true,
isCurrent: false },
    { title: 'Shipped',
description: 'Package is on the way',
timestamp: '',
isCompleted: false,
isCurrent: true },
    { title: 'Delivered',
description: 'Arrives at your door',
timestamp: '',
isCompleted: false,
isCurrent: false }
  ];
}

function formatOrderDate(date) {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function initOrders() {
console.info(``);
}

export function getOrders() {
  return orderData.orders;
}

export function getOrderById(orderId) {
  var orders = getOrders();
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].id === orderId) {
      return orders[i];
    }
  }
  return undefined;
}

export function createOrder(cartItems, paymentMethod, shippingAddress) {

  // Default parameters - ES5 compatible
  var payment = paymentMethod || 'Card';
  var address = shippingAddress || 'No address selected';

  initOrders();

  var subtotal = 0;
  var shipping = 0;

  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];
    subtotal += item.product.price * item.quantity;
    shipping += item.shipping || 0;
  }

  // padStart polyfill for ES5
  var orderIdStr = String(orderData.nextOrderId);
  while (orderIdStr.length < 4) {
    orderIdStr = `0` + orderIdStr;
  }
  var orderNumber = `WS-` + orderIdStr;
  var createdAt = new Date();

  // Build items array - ES5 compatible
  var orderItems = [];
  for (var j = 0; j < cartItems.length; j++) {
    var cartItem = cartItems[j];
    orderItems.push({
      product: cartItem.product,
      productImage: cartItem.product.image || '',
      quantity: cartItem.quantity,
      shipping: cartItem.shipping || 0,
      price: cartItem.product.price
    });
  }

  var order = {
    id: orderData.nextOrderId++,
    orderNumber: orderNumber,
    orderDate: formatOrderDate(createdAt),
    items: orderItems,
    subtotal: subtotal,
    shipping: shipping,
    total: subtotal + shipping,
    totalAmount: subtotal + shipping,
    status: orderStatus.PENDING,
    statusColor: statusColors['pending'],
    paymentMethod: payment,
    createdAt: createdAt.toISOString(),
    estimatedDelivery: getEstimatedDelivery(),
    shippingAddress: address,
    trackingSteps: buildTrackingSteps()
  };

  orderData.orders.push(order);

  return order;
}

export function saveOrders(callback) {

  // Storage devre disi, hemen callback cagir
  if (callback) {
    callback();
  }
}

export function updateOrderStatus(orderId, status) {
  var order = getOrderById(orderId);
  if (order && orderStatus[status]) {
    order.status = orderStatus[status];
    order.statusColor = statusColors[order.status.toLowerCase()];
    return true;
  }
  return false;
}

export function getEstimatedDelivery() {
  var days = Math.floor(Math.random() * 7) + 3;
  var date = new Date();
  date.setDate(date.getDate() + days);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function getOrderStatusColor(status) {
  return statusColors[status] || '#6C757D';
}

export function getRecentOrders(limit) {
  var max = limit || 5;
  return orderData.orders.slice(-max).reverse();
}

export function getPastOrders(limit) {
  var max = limit || 5;
  var orders = orderData.orders;
  if (orders.length <= max) {
    return orders.slice().reverse();
  }
  return orders.slice(-max).reverse();
}

export function ensureOrdersLoaded(callback) {
  if (callback) {
    callback(orderData.orders);
  }
  return true;
}