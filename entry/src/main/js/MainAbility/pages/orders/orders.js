import router from '@ohos.router';
import { getOrders, initOrders, ensureOrdersLoaded } from '../../common/order.js';

export default {
    data: {
        orders: [],
        hasOrders: false,
        isLoading: true
    },
    onInit() {
        initOrders();
        this.loadOrders();
    },
    onShow() {

        this.loadOrders();

    },
    loadOrders() {

        var self = this;

        ensureOrdersLoaded(function(orderList) {

            var displayOrders = [];

            for (var i = orderList.length - 1; i >= 0; i--) {
                var order = orderList[i];

                displayOrders.push({
                    id: order.id,
                    orderNumber: order.orderNumber,
                    status: order.status,
                    statusColor: order.statusColor || '#F39C12',
                    total: order.total ? order.total.toFixed(2) : '0.00',
                    itemCount: order.items ? order.items.length : 0,
                    orderDate: order.orderDate
                });
            }

            self.orders = displayOrders;
            self.hasOrders = displayOrders.length > 0;
            self.isLoading = false;

        });
    },
    openOrder(orderId) {

        router.replaceUrl({
            uri: 'pages/orderDetail/orderDetail',
            params: { orderId: orderId }
        });
    },
    goBack() {
        router.replaceUrl({
            uri: 'pages/menu/menu'
        });
    }
};
