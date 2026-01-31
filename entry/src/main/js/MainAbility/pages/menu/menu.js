import router from '@ohos.router';

export default {
    data: {
    },
    goHome() {
        router.replaceUrl({
            uri: 'pages/home/home'
        });
    },
    goSearch() {
        router.replaceUrl({
            uri: 'pages/search/search'
        });
    },
    goCategories() {
        router.replaceUrl({
            uri: 'pages/categories/categories'
        });
    },
    goWishlist() {
        router.replaceUrl({
            uri: 'pages/wishlist/wishlist'
        });
    },
    goCart() {
        router.replaceUrl({
            uri: 'pages/cart/cart'
        });
    },
    goOrders() {
        router.replaceUrl({
            uri: 'pages/orders/orders'
        });
    },
    goProfile() {
        router.replaceUrl({
            uri: 'pages/profile/profile'
        });
    }
};
