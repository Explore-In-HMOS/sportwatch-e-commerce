import router from '@ohos.router';
import { getOrderById, initOrders, ensureOrdersLoaded } from '../../common/order.js';

export default {
    data: {
        orderId: null,
        order: {
            orderNumber: '',
            status: '',
            statusColor: '#F39C12',
            orderDate: '',
            estimatedDelivery: '',
            items: [],
            total: '0.00',
            shippingAddress: ''
        },
        displayItems: [],
        isLoading: true,
        notFound: false
    },
    onInit() {
        initOrders();
        this.loadOrder();
    },
    loadOrder() {

        var self = this;
        var id = this.orderId;

        ensureOrdersLoaded(function() {

            var orderData = getOrderById(id);

            if (orderData) {
                var displayItems = [];
                if (orderData.items) {
                    for (var i = 0; i < orderData.items.length; i++) {
                        var item = orderData.items[i];
                        displayItems.push({
                            name: item.product ? item.product.name : item.name,
                            price: item.price ? item.price.toFixed(2) : '0.00',
                            quantity: item.quantity,
                            total: ((item.price || 0) * item.quantity).toFixed(2),
                            image: item.productImage || (item.product ? item.product.image : '/data/images/products/1/1.png')
                        });
                    }
                }

                self.order = {
                    orderNumber: orderData.orderNumber,
                    status: orderData.status,
                    statusColor: orderData.statusColor || '#F39C12',
                    orderDate: orderData.orderDate,
                    estimatedDelivery: orderData.estimatedDelivery || '5-7 days',
                    items: displayItems,
                    total: orderData.total ? orderData.total.toFixed(2) : '0.00',
                    shippingAddress: orderData.shippingAddress || 'Default Address'
                };
                self.displayItems = displayItems;
                self.isLoading = false;
                self.notFound = false;

            } else {

                self.isLoading = false;
                self.notFound = true;
            }
        });
    },
    goBack() {
        router.replaceUrl({
            uri: 'pages/orders/orders'
        });
    }
};
