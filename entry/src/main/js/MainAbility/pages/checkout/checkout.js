import router from '@ohos.router';
import { getItems, getTotal } from '../../common/cartData.js';
import { createOrder, initOrders, saveOrders } from '../../common/order.js';

export default {
    data: {
        orderItems: [],
        cartItemsForOrder: [],
        subtotalText: '$0.00',
        shippingText: '$5.00',
        shippingCost: 5.00,
        totalText: '$5.00',
        selectedPayment: 'card',
        isProcessing: false,
        statusText: ''
    },
    onInit() {

        initOrders();
        this.loadCartItems();

    },
    onShow() {

        this.loadCartItems();

    },
    loadCartItems() {

        var items = getItems();

        var displayItems = [];
        var cartItemsForOrder = [];
        var subtotal = 0;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            displayItems.push({
                id: item.id,
                name: item.name,
                quantity: item.quantity,
                totalText: `$` + itemTotal.toFixed(2)
            });
            cartItemsForOrder.push({
                product: {
                    id: item.productId,
                    name: item.name,
                    price: item.price,
                    image: `/data/images/products/` + item.productId + `/1.png`
                },
                quantity: item.quantity,
                shipping: 2.50
            });
        }

        this.orderItems = displayItems;
        this.cartItemsForOrder = cartItemsForOrder;
        this.subtotalText = `$` + subtotal.toFixed(2);
        var total = subtotal + this.shippingCost;
        this.totalText = `$` + total.toFixed(2);

    },
    selectPayment(method) {
        this.selectedPayment = method;
    },
    placeOrder() {

        if (this.isProcessing) {

            return;
        }
        if (this.orderItems.length === 0) {

            this.statusText = 'Cart is empty';
            return;
        }
        this.isProcessing = true;
        this.statusText = 'Processing...';

        var paymentMethod = this.selectedPayment === 'card' ? 'Card' : 'PayPal';
        var order = createOrder(this.cartItemsForOrder, paymentMethod, 'Default Address');

        // Store the order ID in globalThis for confirmation page
        globalThis.__lastOrderId = order.id;

        var self = this;
        // Storage'a kaydet, tamamlaninca yonlendir

        saveOrders(function() {

            setTimeout(function() {

                router.replaceUrl({
                    uri: 'pages/orderConfirmation/orderConfirmation'
                });
            }, 500);
        });
    },
    goBack() {
        router.replaceUrl({
            uri: 'pages/cart/cart'
        });
    }
};
