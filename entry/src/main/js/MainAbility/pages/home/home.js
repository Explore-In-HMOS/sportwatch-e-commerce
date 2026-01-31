import router from '@ohos.router';

export default {
    data: {
        showToast: false,
        toastMsg: ''
    },
    goBack() {
        router.replaceUrl({
            uri: 'pages/menu/menu'
        });
    },
    goCart() {
        router.replaceUrl({
            uri: 'pages/cart/cart'
        });
    },
    goProduct1() {
        router.replaceUrl({
            uri: 'pages/productDetail/productDetail',
            params: { productId: 1 }
        });
    },
    goProduct2() {
        router.replaceUrl({
            uri: 'pages/productDetail/productDetail',
            params: { productId: 2 }
        });
    },
    goProduct3() {
        router.replaceUrl({
            uri: 'pages/productDetail/productDetail',
            params: { productId: 45 }
        });
    },
    goProduct4() {
        router.replaceUrl({
            uri: 'pages/productDetail/productDetail',
            params: { productId: 46 }
        });
    },
    goProduct5() {
        router.replaceUrl({
            uri: 'pages/productDetail/productDetail',
            params: { productId: 47 }
        });
    },
    goProduct6() {
        router.replaceUrl({
            uri: 'pages/productDetail/productDetail',
            params: { productId: 48 }
        });
    },
    goProduct7() {
        router.replaceUrl({
            uri: 'pages/productDetail/productDetail',
            params: { productId: 3 }
        });
    },
    goProduct8() {
        router.replaceUrl({
            uri: 'pages/productDetail/productDetail',
            params: { productId: 10 }
        });
    },
    goProduct9() {
        router.replaceUrl({
            uri: 'pages/productDetail/productDetail',
            params: { productId: 15 }
        });
    },
    goProduct10() {
        router.replaceUrl({
            uri: 'pages/productDetail/productDetail',
            params: { productId: 20 }
        });
    },
    goProduct11() {
        router.replaceUrl({
            uri: 'pages/productDetail/productDetail',
            params: { productId: 25 }
        });
    },
    goProduct12() {
        router.replaceUrl({
            uri: 'pages/productDetail/productDetail',
            params: { productId: 30 }
        });
    },
    showCartToast() {
        this.toastMsg = 'Added to cart!';
        this.showToast = true;
        var self = this;
        setTimeout(function() {
            self.showToast = false;
        }, 1500);
    }
};
