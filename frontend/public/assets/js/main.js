document.addEventListener('DOMContentLoaded', () => {
    // Функция для имитации задержки (для демонстрации загрузки данных)
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // 1. Динамическое отображение популярных категорий
    const categoriesList = document.querySelector('.categories-list');
    const categoriesData = [
        { name: 'Виджеты', image: 'assets/img/category-widgets.png' },
        { name: 'Иконки', image: 'assets/img/category-icons.png' },
        { name: 'Шаблоны', image: 'assets/img/category-templates.png' },
        { name: 'Плагины', image: 'assets/img/category-plugins.png' },
        // ... можно добавить еще категории
    ];

    async function renderCategories() {
        await sleep(500); // Имитация загрузки данных (0.5 секунды)
        categoriesData.forEach(category => {
            const categoryItem = document.createElement('li');
            categoryItem.classList.add('category-item');
            categoryItem.innerHTML = `
                <a href="#" class="category-link">
                    <img src="${category.image}" alt="${category.name}">
                    <span class="category-name">${category.name}</span>
                </a>
            `;
            categoriesList.appendChild(categoryItem);
        });
    }

    renderCategories();


    // 2. Динамическое отображение новинок
    const productsGrid = document.querySelector('.products-grid');
    const productsData = [
        { name: 'Виджет "Таймер обратного отсчета"', price: '$19.99', image: 'assets/img/product-timer.png' },
        { name: 'Набор иконок "Неон"', price: '$9.99', image: 'assets/img/product-icons-neon.png' },
        { name: 'Шаблон "Лендинг для SaaS"', price: '$49.99', image: 'assets/img/product-landing-saas.png' },
        { name: 'Плагин "Форма обратной связи"', price: '$14.99', image: 'assets/img/product-form.png' },
        // ... можно добавить еще товары
    ];

    async function renderProducts() {
        await sleep(800); // Имитация загрузки данных (0.8 секунды)
        productsData.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <a href="#" class="product-card__link">
                    <img src="${product.image}" alt="${product.name}" class="product-card__image">
                    <h3 class="product-card__title">${product.name}</h3>
                    <p class="product-card__price">${product.price}</p>
                </a>
            `;
            productsGrid.appendChild(productCard);
        });
    }

    renderProducts();


    // 3. (Пример) Добавление интерактивности к кнопке "Смотреть каталог"
    const catalogButton = document.querySelector('.hero .button--primary');
    catalogButton.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем переход по ссылке (пока нет реального каталога)
        alert('Переход к каталогу (в разработке)');
        // Здесь можно добавить реальное перенаправление на страницу каталога позже
    });

    // ... можно добавить больше JavaScript для других элементов и интеракций
});
