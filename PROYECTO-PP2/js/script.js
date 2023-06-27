var addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(function(button) {
  button.addEventListener('click', addToCart);
});

function addToCart(event) {
  var product = event.target.closest('.product'); 

  var productName = product.querySelector('h4').innerText;
  var productPrice = product.querySelector('p').innerText;


  var cartItem = document.createElement('li');
  cartItem.innerText = productName + ' - ' + productPrice;

  var cartItems = document.getElementById('cart-items');
  cartItems.appendChild(cartItem);
}