export default {
    data: {
        cart: {
            items: [],
            nextId: 1
        },
        wishlist: {
            items: []
        }
    },
    onCreate() {

    },
    onDestroy() {

    },
    // Cart functions
    addToCart(product) {
        var cart = this.data.cart;
        var existingItem = null;
        for (var i = 0; i < cart.items.length; i++) {
            if (cart.items[i].productId === product.id) {
                existingItem = cart.items[i];
                break;
            }
        }
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.items.push({
                id: cart.nextId++,
                productId: product.id,
                name: product.name,
                price: product.price,
                quantity: 1
            });
        }
    },
    getCartItems() {
        return this.data.cart.items;
    },
    removeFromCart(itemId) {
        var cart = this.data.cart;
        for (var i = 0; i < cart.items.length; i++) {
            if (cart.items[i].id === itemId) {
                cart.items.splice(i, 1);
                break;
            }
        }
    },
    // Wishlist functions
    toggleWishlist(product) {
        var wishlist = this.data.wishlist;
        var index = -1;
        for (var i = 0; i < wishlist.items.length; i++) {
            if (wishlist.items[i].productId === product.id) {
                index = i;
                break;
            }
        }
        if (index > -1) {
            wishlist.items.splice(index, 1);
            return false;
        } else {
            wishlist.items.push({
                productId: product.id,
                productTitle: product.name,
                productPrice: product.price
            });
            return true;
        }
    },
    isInWishlist(productId) {
        var items = this.data.wishlist.items;
        for (var i = 0; i < items.length; i++) {
            if (items[i].productId === productId) {
                return true;
            }
        }
        return false;
    },
    getWishlistItems() {
        return this.data.wishlist.items;
    },
    removeFromWishlist(productId) {
        var wishlist = this.data.wishlist;
        for (var i = 0; i < wishlist.items.length; i++) {
            if (wishlist.items[i].productId === productId) {
                wishlist.items.splice(i, 1);
                break;
            }
        }
    }
};
