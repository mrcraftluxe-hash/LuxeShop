const products = [
    // Майнкрафт услуги
    { category: 'minecraft', catName: '⚙️ Майнкрафт', name: 'Загрузка сборки', price: 99 },
    { category: 'minecraft', catName: '⚙️ Майнкрафт', name: 'Настройка плагинов', price: '299 - 999' },
    { category: 'minecraft', catName: '⚙️ Майнкрафт', name: 'Полная настройка сервера', price: '1999 - 9999' },
    
    // Промокоды Standoff 2
    { category: 'promo', catName: '🔪 Промокоды', name: 'Tanto', price: 119 },
    { category: 'promo', catName: '🔪 Промокоды', name: 'Kerambit', price: 279 },
    { category: 'promo', catName: '🔪 Промокоды', name: 'Butterfly', price: 199 },
    { category: 'promo', catName: '🔪 Промокоды', name: 'Stiletto', price: 189 },
    { category: 'promo', catName: '🔪 Промокоды', name: 'Fang', price: 249 },
    
    // Буст аккаунтов
    { category: 'boost', catName: '🚀 Буст акков', name: 'Silver 1/4', price: 99 },
    { category: 'boost', catName: '🚀 Буст акков', name: 'Gold 1/4', price: 199 },
    { category: 'boost', catName: '🚀 Буст акков', name: 'Pheonix', price: 379 },
    { category: 'boost', catName: '🚀 Буст акков', name: 'Renger', price: 689 },
    { category: 'boost', catName: '🚀 Буст акков', name: 'Master', price: 999 },
    { category: 'boost', catName: '🚀 Буст акков', name: 'Другие ранги', price: 1999 }
];

function renderProducts() {
    const container = document.getElementById('products');
    if (!container) return;
    
    // Группируем товары по категориям
    const categories = {};
    products.forEach(product => {
        if (!categories[product.category]) {
            categories[product.category] = {
                name: product.catName,
                items: []
            };
        }
        categories[product.category].items.push(product);
    });
    
    // Создаем HTML
    let html = '';
    for (let cat in categories) {
        html += `<h2 class="category-title">${categories[cat].name}</h2>`;
        html += '<div class="category-grid">';
        
        categories[cat].items.forEach(item => {
            html += `
                <div class="product-card" onclick="copyToClipboard('${item.name}')">
                    <span class="cat">${item.catName}</span>
                    <div class="name">${item.name}</div>
                    <div class="price">${item.price}₽</div>
                </div>
            `;
        });
        
        html += '</div>';
    }
    
    container.innerHTML = html;
}

// Функция для копирования в буфер обмена
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert(`Скопировано: ${text}`);
    }).catch(err => {
        console.error('Ошибка копирования:', err);
    });
}

// Показываем приветствие в консоли
console.log('MrCraftLuxe Shop загружен! Товаров: ' + products.length);

// Запускаем
renderProducts();
