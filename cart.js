let cart = {};

function addToCart(item, price) {
    if (cart[item]) {
        cart[item].quantity++;
    } else {
        cart[item] = { price: price, quantity: 1 };
    }
    updateCart();
}

function removeFromCart(item) {
    if (cart[item]) {
        cart[item].quantity--;
        if (cart[item].quantity <= 0) {
            delete cart[item];
        }
        updateCart();
    }
}

function updateCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';
    let totalPayment = 0;
    for (let item in cart) {
        let li = document.createElement('li');
        li.textContent = `${item} - $${cart[item].price} x ${cart[item].quantity}`;
        cartElement.appendChild(li);
        totalPayment += cart[item].price * cart[item].quantity;
    }
    document.getElementById('total-payment').textContent = `Total Payment: $${totalPayment}`;
}
function checkout() {
    const cartData = encodeURIComponent(JSON.stringify(cart));
    window.location.href = `payment.html?cart=${cartData}`;
}