import router from '@ohos.router';
import { getOrderById, initOrders } from '../../common/order.js';

export default {
    data: {
        order: {
            orderNumber: '',
            status: 'Confirmed',
            paymentMethod: 'Card',
            itemCount: 0,
            estimatedDelivery: '5-7 days',
            totalText: '$0.00'
        },
        statusSteps: [
            { label: 'Payment received', done: true },
            { label: 'Preparing package', done: true },
            { label: 'Handed to courier', done: false }
        ]
    },
    onInit() {

        initOrders();
        this.loadOrderDetails();

    },
    loadOrderDetails() {

        var orderId = globalThis.__lastOrderId;

        if (orderId) {
            var orderData = getOrderById(orderId);

            if (orderData) {
                this.order = {
                    orderNumber: orderData.orderNumber,
                    status: 'Confirmed',
                    paymentMethod: orderData.paymentMethod || 'Card',
                    itemCount: orderData.items ? orderData.items.length : 0,
                    estimatedDelivery: orderData.estimatedDelivery || '5-7 days',
                    totalText: '$' + (orderData.total ? orderData.total.toFixed(2) : '0.00')
                };

            } else {

            }
        } else {

        }
    },
    goHome() {
        router.replaceUrl({
            uri: 'pages/home/home'
        });
    },
    goOrders() {
        router.replaceUrl({
            uri: 'pages/orders/orders'
        });
    }
};
