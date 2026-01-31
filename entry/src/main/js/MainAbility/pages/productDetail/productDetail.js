import router from '@ohos.router';
import { addItem } from '../../common/cartData.js';

var products = {
    p1: {
        id: 1,
        name: 'Heated Socks',
        price: '$24.37',
        description: 'Premium heated socks with temperature control.',
        images: ['/data/images/products/1/1.png', '/data/images/products/1/2.png', '/data/images/products/1/3.png', '/data/images/products/1/4.png']
    },
    p2: {
        id: 2,
        name: 'Neck Shawl',
        price: '$22.21',
        description: 'Comfortable heated neck shawl. Stay warm and cozy.',
        images: ['/data/images/products/2/1.png', '/data/images/products/2/2.png', '/data/images/products/2/3.png', '/data/images/products/2/4.png']
    },
    p3: {
        id: 3,
        name: 'Fireplace Fan',
        price: '$35.74',
        description: '6 Blade Heat-Powered Fireplace Fan.',
        images: ['/data/images/products/3/1.png', '/data/images/products/3/2.png', '/data/images/products/3/3.png']
    },
    p10: {
        id: 10,
        name: 'Vegetable Chopper',
        price: '$12.45',
        description: '14 In 1 Multifunctional Vegetable Chopper.',
        images: ['/data/images/products/10/1.png', '/data/images/products/10/2.png', '/data/images/products/10/3.png']
    },
    p15: {
        id: 15,
        name: 'Car Sticker',
        price: '$0.96',
        description: 'Car Cartoon Glass Sticker.',
        images: ['/data/images/products/15/1.png', '/data/images/products/15/2.png']
    },
    p20: {
        id: 20,
        name: 'Car Trash Can',
        price: '$3.71',
        description: 'Car Trash Can with Lid.',
        images: ['/data/images/products/20/1.png', '/data/images/products/20/2.png', '/data/images/products/20/3.png']
    },
    p25: {
        id: 25,
        name: '3D Drawing Book',
        price: '$6.57',
        description: '3D Drawing Book with 42 Patterns.',
        images: ['/data/images/products/25/1.png', '/data/images/products/25/2.png']
    },
    p30: {
        id: 30,
        name: 'Bolt Kit',
        price: '$32.58',
        description: 'Stainless Steel Hex Nut Bolt Kit.',
        images: ['/data/images/products/30/1.png', '/data/images/products/30/2.png', '/data/images/products/30/3.png']
    },
    p45: {
        id: 45,
        name: 'Watch Band',
        price: '$15.99',
        description: 'Stylish smart watch band.',
        images: ['/data/images/products/45/1.png', '/data/images/products/45/2.png', '/data/images/products/45/3.png', '/data/images/products/45/4.png']
    },
    p46: {
        id: 46,
        name: 'Earbuds',
        price: '$35.50',
        description: 'Wireless bluetooth earbuds.',
        images: ['/data/images/products/46/1.png', '/data/images/products/46/2.png', '/data/images/products/46/3.png', '/data/images/products/46/4.png']
    },
    p47: {
        id: 47,
        name: 'Smart Ring',
        price: '$49.99',
        description: 'Smart ring with health tracking features.',
        images: ['/data/images/products/47/1.png', '/data/images/products/47/2.png', '/data/images/products/47/3.png', '/data/images/products/47/4.png']
    },
    p48: {
        id: 48,
        name: 'Fitness Band',
        price: '$29.99',
        description: 'Fitness tracking band with heart rate monitor.',
        images: ['/data/images/products/48/1.png', '/data/images/products/48/2.png', '/data/images/products/48/3.png', '/data/images/products/48/4.png']
    }
};

export default {
    data: {
        productId: 1,
        product: {
            id: 1,
            name: 'Heated Socks',
            price: '$24.37',
            description: 'Premium heated socks with temperature control.',
            images: ['/data/images/products/1/1.png']
        },
        priceText: '$24.37',
        currentIndex: 0,
        showToast: false,
        toastMsg: ''
    },
    onInit() {
        this.loadProduct();
    },
    loadProduct() {

        var id = this.productId || 1;

        var key = `p` + id;

        var prod = products[key];
        if (prod) {

            this.product = prod;
            this.priceText = prod.price;
        } else {

        }

    },
    swiperChange(e) {
        this.currentIndex = e.index;
    },
    goBack() {
        router.replaceUrl({
            uri: 'pages/menu/menu'
        });
    },

    addToCart() {
        var product = {
            id: this.product.id,
            name: this.product.name,
            // price: parseFloat(this.product.price.replace('$', ''))
            price: 99
        };

        addItem(product);

        this.toastMsg = 'Added to cart!';
        this.showToast = true;

        var self = this;
        setTimeout(function() {
            self.showToast = false;

        }, 1500);

    },
    buyNow() {
        router.replaceUrl({
            uri: 'pages/checkout/checkout'
        });
    }
};
