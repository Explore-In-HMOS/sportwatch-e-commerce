// Shared cart data module - using globalThis for cross-page persistence
if (!globalThis.__cartData__) {
    globalThis.__cartData__ = {
        items: [],
        nextId: 1
    };

} else {

}

var cartData = globalThis.__cartData__;

export function addItem(product) {

    var existingItem = null;
    for (var i = 0; i < cartData.items.length; i++) {

        if (cartData.items[i].productId === product.id) {
            existingItem = cartData.items[i];

            break;
        }
    }

    if (existingItem) {

        existingItem.quantity += 1;

    } else {
        var newItem = {
            id: cartData.nextId++,
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        };

        cartData.items.push(newItem);

    }

}

export function getItems() {

    return cartData.items;
}

export function removeItem(itemId) {

    for (var i = 0; i < cartData.items.length; i++) {
        if (cartData.items[i].id === itemId) {

            cartData.items.splice(i, 1);

            break;
        }
    }

}

export function getCount() {

    var count = 0;
    for (var i = 0; i < cartData.items.length; i++) {
        count += cartData.items[i].quantity;
    }

    return count;
}

export function getTotal() {

    var total = 0;
    for (var i = 0; i < cartData.items.length; i++) {
        total += cartData.items[i].price * cartData.items[i].quantity;
    }

    return total;
}
