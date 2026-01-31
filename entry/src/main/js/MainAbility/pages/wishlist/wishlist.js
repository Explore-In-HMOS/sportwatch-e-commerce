import router from '@ohos.router';

export default {
    data: {
        wishlistItems: [],
        showToast: false,
        toastMsg: ''
    },
    onInit() {
        this.loadWishlist();
    },
    onShow() {
        this.loadWishlist();
    },
    loadWishlist() {
        var items = this.$app.$def.getWishlistItems();
        var displayItems = [];

        for (var i = 0; i < items.length; i++) {
            const item = items[i];
            displayItems.push({
                productId: item.productId,
                productTitle: item.productTitle,
                productPrice: item.productPrice,
                image: `/data/images/products/` + item.productId + `/1.png`
            });
        }

        this.wishlistItems = displayItems;
    },
    openProduct(productId) {
        router.replaceUrl({
            uri: 'pages/productDetail/productDetail',
            params: { productId: productId }
        });
    },
    removeFromWishlist(productId) {
        this.$app.$def.removeFromWishlist(productId);
        this.loadWishlist();
        this.toastMsg = 'Removed from favorites';
        this.showToast = true;
        var self = this;
        setTimeout(function() {
            self.showToast = false;
        }, 1500);
    },
    addToCartFromWishlist(productId) {
        var items = this.wishlistItems;
        var item = null;
        for (var i = 0; i < items.length; i++) {
            if (items[i].productId === productId) {
                item = items[i];
                break;
            }
        }
        if (item) {
            const product = {
                id: item.productId,
                name: item.productTitle,
                price: parseFloat(item.productPrice)
            };
            this.$app.$def.addToCart(product);
            this.toastMsg = 'Added to cart';
            this.showToast = true;
            const self = this;
            setTimeout(function() {
                self.showToast = false;
            }, 1500);
        }
    },
    goBack() {
        router.replaceUrl({
            uri: 'pages/menu/menu'
        });
    }
};
