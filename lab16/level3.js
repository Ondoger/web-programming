let currentProducts = [...products];
let isSorted = false;
let activeCategory = 'all';

function getCategories() {
    const cats = [...new Set(products.map(p => p.category))];
    return cats;
}

function renderCategoryBar() {
    const bar = document.getElementById('category-bar');
    const cats = getCategories();

    bar.innerHTML = '';

    const allPill = document.createElement('button');
    allPill.className = 'cat-pill' + (activeCategory === 'all' ? ' active' : '');
    allPill.textContent = 'Всі';
    allPill.addEventListener('click', () => {
        activeCategory = 'all';
        applyFiltersAndSort();
        renderCategoryBar();
    });
    bar.appendChild(allPill);

    cats.forEach(cat => {
        const pill = document.createElement('button');
        pill.className = 'cat-pill' + (activeCategory === cat ? ' active' : '');
        pill.textContent = cat;
        pill.addEventListener('click', () => {
            activeCategory = cat;
            applyFiltersAndSort();
            renderCategoryBar();
        });
        bar.appendChild(pill);
    });
}

function applyFiltersAndSort() {
    let filtered = [...products];

    if (activeCategory !== 'all') {
        filtered = filtered.filter(p => p.category === activeCategory);
    }

    if (isSorted) {
        filtered.sort((a, b) => a.price - b.price);
    }

    currentProducts = filtered;
    renderGrid();
    updateCount();
}

function createCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const imgWrap = document.createElement('div');
    imgWrap.classList.add('card-img-wrap');
    imgWrap.title = `Клік → console: id = ${product.id}`;
    imgWrap.addEventListener('click', () => {
        console.log(`Product ID: ${product.id}`);
    });

    const img = document.createElement('img');
    img.src = product.thumbnail;
    img.alt = product.title;
    img.loading = 'lazy';
    imgWrap.appendChild(img);

    const body = document.createElement('div');
    body.classList.add('card-body');

    const category = document.createElement('span');
    category.classList.add('card-category');
    category.textContent = product.category;

    const title = document.createElement('h3');
    title.classList.add('card-title');
    title.textContent = product.title;

    const desc = document.createElement('p');
    desc.classList.add('card-desc');
    desc.textContent = product.description;

    body.appendChild(category);
    body.appendChild(title);
    body.appendChild(desc);

    const footer = document.createElement('div');
    footer.classList.add('card-footer');

    const price = document.createElement('span');
    price.classList.add('card-price');
    price.textContent = `$${product.price}`;

    const cartBtn = document.createElement('button');
    cartBtn.classList.add('cart-btn');
    cartBtn.title = 'Додати до кошика';
    cartBtn.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';

    footer.appendChild(price);
    footer.appendChild(cartBtn);

    card.appendChild(imgWrap);
    card.appendChild(body);
    card.appendChild(footer);

    return card;
}

function renderGrid() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    currentProducts.forEach((product, index) => {
        const card = createCard(product);
        card.style.animationDelay = `${index * 0.04}s`;
        grid.appendChild(card);
    });
}

function updateCount() {
    const countEl = document.getElementById('products-count');
    const total = currentProducts.length;
    countEl.textContent = `${total} товар${total === 1 ? '' : total < 5 ? 'и' : 'ів'}`;
}

const btnSort = document.getElementById('btn-sort');
const sortIndicator = document.getElementById('sort-indicator');

if (btnSort) {
    btnSort.addEventListener('click', () => {
        isSorted = !isSorted;

        if (isSorted) {
            btnSort.innerHTML = '<i class="fa-solid fa-arrow-down-wide-short"></i> Скасувати сортування';
            sortIndicator.innerHTML = '✅ Відсортовано за ціною: <span>від найдешевшого</span>';
        } else {
            btnSort.innerHTML = '<i class="fa-solid fa-arrow-up-wide-short"></i> Сортувати за ціною';
            sortIndicator.innerHTML = '';
        }

        applyFiltersAndSort();
    });
}

renderCategoryBar();
applyFiltersAndSort();
