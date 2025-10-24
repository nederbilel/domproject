// Select all cards
const cards = document.querySelectorAll('.card');

function updateTotal() {
  let total = 0;
  cards.forEach(card => {
    const quantity = parseInt(card.querySelector('.quantity').textContent);
    const priceText = card.querySelector('.unit-price').textContent;
    const price = parseFloat(priceText.replace('$', '').trim());
    total += quantity * price;
  });
  document.querySelector('.total').textContent = total + ' $';
}

// Loop through each card and attach event listeners
cards.forEach(card => {
  const plusBtn = card.querySelector('.fa-plus-circle');
  const minusBtn = card.querySelector('.fa-minus-circle');
  const deleteBtn = card.querySelector('.fa-trash-alt');
  const likeBtn = card.querySelector('.fa-heart');
  const quantityEl = card.querySelector('.quantity');

  // Increase quantity
  plusBtn.addEventListener('click', () => {
    quantityEl.textContent = parseInt(quantityEl.textContent) + 1;
    updateTotal();
  });

  // Decrease quantity
  minusBtn.addEventListener('click', () => {
    let qty = parseInt(quantityEl.textContent);
    if (qty > 0) {
      quantityEl.textContent = qty - 1;
      updateTotal();
    }
  });

  // Delete item
  deleteBtn.addEventListener('click', () => {
    card.closest('.card-body').remove();
    updateTotal();
  });

  // Like item
  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('liked');
  });
});

// Initialize total price
updateTotal();
