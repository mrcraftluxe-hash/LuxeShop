// Данные товаров
const products = [
    // Майнкрафт услуги
    { id: 1, cat: '⚙️ Майнкрафт', name: 'Загрузка сборки', price: 99, desc: 'Готовая сборка под ключ' },
    { id: 2, cat: '⚙️ Майнкрафт', name: 'Настройка плагинов', price: '299 - 999', desc: 'Любые плагины' },
    { id: 3, cat: '⚙️ Майнкрафт', name: 'Полная настройка сервера', price: '1999 - 9999', desc: 'Сервер под ключ' },
    
    // Промокоды Standoff 2
    { id: 4, cat: '🔪 Промокоды', name: 'Tanto', price: 119 },
    { id: 5, cat: '🔪 Промокоды', name: 'Kerambit', price: 279 },
    { id: 6, cat: '🔪 Промокоды', name: 'Butterfly', price: 199 },
    { id: 7, cat: '🔪 Промокоды', name: 'Stiletto', price: 189 },
    { id: 8, cat: '🔪 Промокоды', name: 'Fang', price: 249 },
    
    // Буст аккаунтов
    { id: 9, cat: '🚀 Буст акков', name: 'Silver 1/4', price: 99 },
    { id: 10, cat: '🚀 Буст акков', name: 'Gold 1/4', price: 199 },
    { id: 11, cat: '🚀 Буст акков', name: 'Pheonix', price: 379 },
    { id: 12, cat: '🚀 Буст акков', name: 'Renger', price: 689 },
    { id: 13, cat: '🚀 Буст акков', name: 'Master', price: 999 },
    { id: 14, cat: '🚀 Буст акков', name: 'Другие ранги', price: 1999 }
];

// Текущая выбранная категория
let currentCat = 'all';

// Функция показа меню
function showMenu() {
    const container = document.getElementById('products');
    
    let html = `
        <div class="menu-bar">
            <button class="menu-btn active" onclick="filterProducts('all')">🏠 Все</button>
            <button class="menu-btn" onclick="filterProducts('⚙️ Майнкрафт')">⚙️ Майнкрафт</button>
            <button class="menu-btn" onclick="filterProducts('🔪 Промокоды')">🔪 Промокоды</button>
            <button class="menu-btn" onclick="filterProducts('🚀 Буст акков')">🚀 Буст</button>
        </div>
        <div id="products-grid" class="products-grid"></div>
    `;
    
    container.innerHTML = html;
    showProducts();
}

// Фильтр товаров
function filterProducts(cat) {
    currentCat = cat;
    
    // Обновляем активную кнопку
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    showProducts();
}

// Показать товары
function showProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    let filtered = products;
    if (currentCat !== 'all') {
        filtered = products.filter(p => p.cat === currentCat);
    }
    
    let html = '';
    filtered.forEach(p => {
        html += `
            <div class="product-card" onclick="showDetails(${p.id})">
                <span class="cat">${p.cat}</span>
                <div class="name">${p.name}</div>
                ${p.desc ? `<div class="desc">${p.desc}</div>` : ''}
                <div class="price">${p.price}₽</div>
                <button class="buy-btn" onclick="buyProduct(${p.id}); event.stopPropagation()">📩 Купить</button>
            </div>
        `;
    });
    
    if (filtered.length === 0) {
        html = '<div class="empty">❌ Нет товаров в этой категории</div>';
    }
    
    grid.innerHTML = html;
}

// Купить товар
function buyProduct(id) {
    const p = products.find(p => p.id === id);
    const text = `Здравствуйте! Хочу купить: ${p.name} (${p.price}₽)`;
    window.open(`https://t.me/MrCraftLuxeTT?text=${encodeURIComponent(text)}`, '_blank');
}

// Детали товара
function showDetails(id) {
    const p = products.find(p => p.id === id);
    alert(`
        ${p.name}
        Категория: ${p.cat}
        Цена: ${p.price}₽
        ${p.desc || ''}
        
        Нажмите "Купить" для заказа в Telegram
    `);
}

// Запуск
showMenu();
