const STORAGE_KEY = 'products';

function loadProducts() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveProducts(arr) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}

const overlay      = document.getElementById('overlay');
const openBtn      = document.getElementById('openModalBtn');
const closeBtn     = document.getElementById('closeBtn');
const form         = document.getElementById('productForm');
const modalTitle   = document.getElementById('modalTitle');
const editIdInput  = document.getElementById('editId');
const productsGrid = document.getElementById('productsGrid');

function openCreateModal() {
  modalTitle.textContent = 'Create product';
  editIdInput.value = '';
  form.reset();
  clearErrors();
  overlay.classList.add('active');
}

function openEditModal(product) {
  modalTitle.textContent = 'Edit product';
  editIdInput.value = product.id;

  document.getElementById('title').value       = product.title;
  document.getElementById('description').value = product.description;
  document.getElementById('price').value       = product.price;
  document.getElementById('discount').value    = product.discount;
  document.getElementById('stock').value       = product.stock ?? '';
  document.getElementById('brand').value       = product.brand ?? '';
  document.getElementById('category').value    = product.category;
  document.getElementById('image').value       = product.image;

  clearErrors();
  overlay.classList.add('active');
}

function closeModal() {
  overlay.classList.remove('active');
}

openBtn.addEventListener('click', openCreateModal);
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

function clearErrors() {
  ['title', 'description', 'price', 'discount', 'stock', 'category', 'image']
    .forEach(id => showError(id, false));
}

function validateForm() {
  let valid = true;

  const title    = document.getElementById('title').value.trim();
  const desc     = document.getElementById('description').value.trim();
  const price    = document.getElementById('price').value;
  const discount = document.getElementById('discount').value;
  const stock    = document.getElementById('stock').value;
  const category = document.getElementById('category').value;
  const image    = document.getElementById('image').value.trim();

  if (!title)                              { showError('title', true);       valid = false; } else showError('title', false);
  if (!desc)                               { showError('description', true);  valid = false; } else showError('description', false);
  if (price === '' || Number(price) < 0)   { showError('price', true);        valid = false; } else showError('price', false);
  if (discount === '' || Number(discount) < 0) { showError('discount', true); valid = false; } else showError('discount', false);
  if (stock !== '' && Number(stock) < 0)   { showError('stock', true);        valid = false; } else showError('stock', false);
  if (!category)                           { showError('category', true);     valid = false; } else showError('category', false);
  if (!image)                              { showError('image', true);        valid = false; } else showError('image', false);

  return valid;
}

function renderCard(product) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.id = product.id;

  card.innerHTML = `
    <div class="card-img-wrap">
      <img src="${product.image}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/220x160?text=No+Image'" />
      <span class="card-discount">${product.discount}%</span>
      <span class="card-category">${product.category}</span>
    </div>
    <div class="card-body">
      <div class="card-title">${product.title}</div>
      <div class="card-desc">${product.description}</div>
    </div>
    <div class="card-footer">
      <span class="card-price">${product.price} $</span>
      <div class="card-actions">
        <button class="btn-edit" title="Редагувати">✏️</button>
        <button class="btn-delete" title="Видалити">🗑️</button>
      </div>
    </div>
  `;

  card.querySelector('.btn-edit').addEventListener('click', () => {
    const products = loadProducts();
    const found = products.find(p => p.id === product.id);
    if (found) openEditModal(found);
  });

  card.querySelector('.btn-delete').addEventListener('click', () => {
    if (confirm(`Do you really want to remove "${product.title}" element?`)) {
      deleteProduct(product.id);
    }
  });

  productsGrid.appendChild(card);
}

function renderAllCards() {
  productsGrid.innerHTML = '';
  const products = loadProducts();
  products.forEach(p => renderCard(p));
}

function deleteProduct(id) {
  const products = loadProducts().filter(p => p.id !== id);
  saveProducts(products);
  renderAllCards();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  const products  = loadProducts();
  const editId    = editIdInput.value;

  const data = {
    title:       document.getElementById('title').value.trim(),
    description: document.getElementById('description').value.trim(),
    price:       Number(document.getElementById('price').value),
    discount:    Number(document.getElementById('discount').value),
    stock:       document.getElementById('stock').value !== '' ? Number(document.getElementById('stock').value) : null,
    brand:       document.getElementById('brand').value.trim() || null,
    category:    document.getElementById('category').value,
    image:       document.getElementById('image').value.trim(),
  };

  if (editId) {
    const idx = products.findIndex(p => p.id === Number(editId));
    if (idx !== -1) {
      products[idx] = { ...products[idx], ...data };
    }
  } else {
    data.id = Date.now();
    products.push(data);
  }

  saveProducts(products);
  renderAllCards();
  form.reset();
  closeModal();
});

renderAllCards();
