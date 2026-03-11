const products = [
    { cat: '⚙️ Майнкрафт', name: 'Загрузка сборки', price: 99 },
    { cat: '⚙️ Майнкрафт', name: 'Настройка плагинов', price: '299 - 999' },
    { cat: '⚙️ Майнкрафт', name: 'Полная настройка сервера', price: '1999 - 9999' },
    { cat: '🔪 Промокоды', name: 'Tanto', price: 119 },
    { cat: '🔪 Промокоды', name: 'Kerambit', price: 279 },
    { cat: '🔪 Промокоды', name: 'Butterfly', price: 199 },
    { cat: '🔪 Промокоды', name: 'Stiletto', price: 189 },
    { cat: '🔪 Промокоды', name: 'Fang', price: 249 },
    { cat: '🚀 Буст акков', name: 'Silver 1/4', price: 99 },
    { cat: '🚀 Буст акков', name: 'Gold 1/4', price: 199 },
    { cat: '🚀 Буст акков', name: 'Pheonix', price: 379 },
    { cat: '🚀 Буст акков', name: 'Renger', price: 689 },
    { cat: '🚀 Буст акков', name: 'Master', price: 999 },
    { cat: '🚀 Буст акков', name: 'Другие ранги', price: 1999 }
];

function showProducts() {
    const container = document.getElementById('products');
    let html = '';
    
    for (let i = 0; i < products.length; i++) {
        html += '<div class="product-card">';
        html += '<div class="cat">' + products[i].cat + '</div>';
        html += '<div class="name">' + products[i].name + '</div>';
        html += '<div class="price">' + products[i].price + '₽</div>';
        html += '</div>';
    }
    
    container.innerHTML = html;
}

showProducts();
