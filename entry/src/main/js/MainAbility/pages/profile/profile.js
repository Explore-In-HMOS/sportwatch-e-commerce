import router from '@ohos.router';

export default {
    data: {
        userName: 'User',
        userEmail: 'user@example.com',
        avatarLetter: 'U',
        isConnected: true,
        deviceName: 'Watch GT3',
        batteryLevel: 85
    },
    onInit() {
        if (this.userName && this.userName.length > 0) {
            this.avatarLetter = this.userName.charAt(0).toUpperCase();
        }
    },
    openSettings() {
        router.replaceUrl({
            uri: 'pages/settings/settings'
        });
    },
    openOrders() {
        router.replaceUrl({
            uri: 'pages/orders/orders'
        });
    },
    openWishlist() {
        router.replaceUrl({
            uri: 'pages/wishlist/wishlist'
        });
    },
    goBack() {
        router.replaceUrl({
            uri: 'pages/menu/menu'
        });
    }
};
