import router from '@ohos.router';
import { getItems, removeItem as removeCartItem, getCount, getTotal } from '../../common/cartData.js';

export default {
    data: {
        cartItems: [],
        cartCount: 0,
        totalText: '0.00',
        showToast: false,
        toastMsg: ''
    },
    onInit() {

        this.loadCart();

    },
    onShow() {

        this.loadCart();

    },
    loadCart() {

        var items = getItems();

        var displayItems = [];
        var total = 0;
        var count = 0;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];

            var itemTotal = item.price * item.quantity;
            total += itemTotal;
            count += item.quantity;
            var displayItem = {
                id: item.id,
                productId: item.productId,
                name: item.name,
                quantity: item.quantity,
                totalPrice: itemTotal.toFixed(2),
                image: `/data/images/products/` + item.productId + `/1.png`
            };

            displayItems.push(displayItem);
        }

        this.cartItems = displayItems;
        this.cartCount = count;
        this.totalText = total.toFixed(2);

    },
    goBack() {
        router.replaceUrl({
            uri: 'pages/menu/menu'
        });
    },
    goToCheckout() {
        if (this.cartItems.length > 0) {
            router.replaceUrl({
                uri: 'pages/checkout/checkout'
            });
        }
    },
    removeItem(id) {
        removeCartItem(id);
        this.loadCart();
        this.toastMsg = 'Item removed';
        this.showToast = true;
        var self = this;
        setTimeout(function() {
            self.showToast = false;
        }, 1500);
    }
};
