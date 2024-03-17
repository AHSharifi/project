const cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartbox = document.getElementById('cart');

cart.forEach(item => {
    cartbox.innerHTML = `
        <h2>${item.name}</h2>
    `
});
