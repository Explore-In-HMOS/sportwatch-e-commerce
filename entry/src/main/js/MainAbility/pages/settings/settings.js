import router from '@ohos.router';

export default {
    data: {
        orderAlerts: true,
        dealAlerts: false,
        pushNotifications: true,
        darkMode: true
    },
    toggleOrderAlerts() {
        this.orderAlerts = !this.orderAlerts;
    },
    toggleDealAlerts() {
        this.dealAlerts = !this.dealAlerts;
    },
    togglePush() {
        this.pushNotifications = !this.pushNotifications;
    },
    toggleDark() {
        this.darkMode = !this.darkMode;
    },
    goBack() {
        router.replaceUrl({
            uri: 'pages/profile/profile'
        });
    }
};
