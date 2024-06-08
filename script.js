// Get the cart element
const cart = document.getElementById('cart');

// Get the product elements
const products = document.querySelectorAll('.carousel-item');

// Add event listener to each product button
products.forEach((product) => {
  const button = product.querySelector('.btn-add-cart');
  button.addEventListener('click', () => {
    // Get the product details
    const productName = product.querySelector('h2').textContent;
    const productPrice = product.querySelector('p').textContent;
    const productImage = product.querySelector('img').src;

    // Create a new cart item element
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <img src="${productImage}" alt="${productName}">
      <h2>${productName}</h2>
      <p>${productPrice}</p>
      <button class="remove-from-cart">Remover</button>
    `;

    // Add the cart item to the cart
    cart.appendChild(cartItem);

    // Update the cart total
    updateCartTotal();
  });
});

// Function to update the cart total
function updateCartTotal() {
  const cartItems = cart.querySelectorAll('.cart-item');
  let total = 0;
  cartItems.forEach((item) => {
    const price = item.querySelector('p').textContent;
    total += parseFloat(price);
  });
  document.getElementById('cart-total').textContent = `Total: R$ ${total.toFixed(2)}`;
}