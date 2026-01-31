import router from '@ohos.router';

var productsData = {
    'smartwatches': [
        { id: 47, title: 'Smart Ring', price: '$49.99', image: '/data/images/products/47/1.png' },
        { id: 48, title: 'Fitness Band', price: '$29.99', image: '/data/images/products/48/1.png' }
    ],
    'fitnessbands': [
        { id: 48, title: 'Fitness Band', price: '$29.99', image: '/data/images/products/48/1.png' }
    ],
    'earbuds': [
        { id: 46, title: 'Earbuds', price: '$35.50', image: '/data/images/products/46/1.png' }
    ],
    'watchbands': [
        { id: 45, title: 'Watch Band', price: '$15.99', image: '/data/images/products/45/1.png' }
    ],
    'default': [
        { id: 1, title: 'Heated Socks', price: '$24.37', image: '/data/images/products/1/1.png' },
        { id: 2, title: 'Neck Shawl', price: '$22.21', image: '/data/images/products/2/1.png' },
        { id: 45, title: 'Watch Band', price: '$15.99', image: '/data/images/products/45/1.png' },
        { id: 46, title: 'Earbuds', price: '$35.50', image: '/data/images/products/46/1.png' },
        { id: 47, title: 'Smart Ring', price: '$49.99', image: '/data/images/products/47/1.png' },
        { id: 48, title: 'Fitness Band', price: '$29.99', image: '/data/images/products/48/1.png' }
    ]
};

export default {
    data: {
        subcategory: '',
        subcategoryName: '',
        products: []
    },
    onInit() {
        this.subcategoryName = this.subcategory || 'All Products';
        this.loadProducts();
    },
    loadProducts() {
        var prods = productsData[this.subcategoryName];
        if (prods) {
            this.products = prods;
        } else {
            this.products = productsData['default'];
        }
    },
    goBack() {
        router.replaceUrl({
            uri: 'pages/menu/menu'
        });
    },
    goToProduct(productId) {

        router.replaceUrl({
            uri: 'pages/productDetail/productDetail',
            params: { productId: productId }
        });

    }
};
