const products = [];

const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeBtn');
const form = document.getElementById('productForm');

function openModal() {
  overlay.classList.add('active');
}

function closeModal() {
  overlay.classList.remove('active');
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
});

function showError(fieldId, show) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(fieldId + 'Error');
  if (show) {
    field.classList.add('invalid');
    if (error) error.style.display = 'block';
  } else {
    field.classList.remove('invalid');
    if (error) error.style.display = 'none';
  }
}

function validateForm() {
  let valid = true;

  const title = document.getElementById('title').value.trim();
  const description = document.getElementById('description').value.trim();
  const price = document.getElementById('price').value;
  const discount = document.getElementById('discount').value;
  const stock = document.getElementById('stock').value;
  const category = document.getElementById('category').value;
  const image = document.getElementById('image').value.trim();

  const titleInvalid = title === '';
  showError('title', titleInvalid);
  if (titleInvalid) valid = false;

  const descInvalid = description === '';
  showError('description', descInvalid);
  if (descInvalid) valid = false;

  const priceInvalid = price === '' || Number(price) < 0;
  showError('price', priceInvalid);
  if (priceInvalid) valid = false;

  const discountInvalid = discount === '' || Number(discount) < 0;
  showError('discount', discountInvalid);
  if (discountInvalid) valid = false;

  if (stock !== '' && Number(stock) < 0) {
    showError('stock', true);
    valid = false;
  } else {
    showError('stock', false);
  }

  const catInvalid = category === '';
  showError('category', catInvalid);
  if (catInvalid) valid = false;

  const imgInvalid = image === '';
  showError('image', imgInvalid);
  if (imgInvalid) valid = false;

  return valid;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  const product = {
    title: document.getElementById('title').value.trim(),
    description: document.getElementById('description').value.trim(),
    price: Number(document.getElementById('price').value),
    discount: Number(document.getElementById('discount').value),
    stock: document.getElementById('stock').value !== '' ? Number(document.getElementById('stock').value) : null,
    brand: document.getElementById('brand').value.trim() || null,
    category: document.getElementById('category').value,
    image: document.getElementById('image').value.trim(),
  };

  products.push(product);
  console.log('Products array:', products);

  form.reset();
  closeModal();
});
