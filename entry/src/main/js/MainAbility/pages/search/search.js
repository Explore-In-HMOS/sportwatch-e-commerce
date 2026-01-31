import router from '@ohos.router';

export default {
    data: {
        query: ''
    },
    onSearch(e) {
        this.query = e.value;
    },
    goBack() {
        router.replaceUrl({
            uri: 'pages/menu/menu'
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
    }
};
