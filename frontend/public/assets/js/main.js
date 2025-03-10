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
document.addEventListener('DOMContentLoaded', () => {
    // Функция для имитации задержки (для демонстрации загрузки данных)
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // 1. Динамическое отображение популярных категорий
    const categoriesList = document.querySelector('.categories-list');

    async function renderCategories() {
        try {
            const response = await fetch('/backend/api/categories.php'); // Путь к API endpoint
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const categoriesData = await response.json();
            categoriesList.innerHTML = ''; // Очищаем список перед добавлением новых категорий
            categoriesData.forEach(category => {
                const categoryItem = document.createElement('li');
                categoryItem.classList.add('category-item');
                categoryItem.innerHTML = `
                    <a href="#" class="category-link">
                        <img src="frontend/public${category.image}" alt="${category.name}">
                        <span class="category-name">${category.name}</span>
                    </a>
                `;
                categoriesList.appendChild(categoryItem);
            });
        } catch (error) {
            console.error('Ошибка загрузки категорий:', error);
            categoriesList.innerHTML = '<li class="error-message">Не удалось загрузить категории.</li>'; // Обработка ошибки
        }
    }

    renderCategories();


    // 2. Динамическое отображение новинок
    const productsGrid = document.getElementById('homepage-products-grid');
    const loadingMessage = productsGrid.querySelector('.loading-message');

    async function renderProducts() {
        try {
            const response = await fetch('/backend/api/products.php'); // Путь к API endpoint
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const productsData = await response.json();
            productsGrid.innerHTML = ''; // Очищаем сетку перед добавлением новых товаров

            if (loadingMessage) {
                loadingMessage.remove(); // Убираем сообщение о загрузке после успешной загрузки
            }

            if (productsData.length === 0) {
                productsGrid.innerHTML = '<div class="empty-catalog">В новинках пока нет товаров.</div>';
                return;
            }

            productsData.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <a href="#" class="product-card__link">
                        <img src="frontend/public${product.image}" alt="${product.name}" class="product-card__image">
                        <h3 class="product-card__title">${product.name}</h3>
                        <p class="product-card__price">${product.price} <span class="currency">битов</span></p>
                    </a>
                `;
                productsGrid.appendChild(productCard);
            });
        } catch (error) {
            console.error('Ошибка загрузки новинок:', error);
            productsGrid.innerHTML = '<div class="error-message">Не удалось загрузить новинки.</div>'; // Обработка ошибки
            if (loadingMessage) {
                loadingMessage.remove(); // Убираем сообщение о загрузке даже в случае ошибки
            }
        }
    }

    renderProducts();


    // 3. (Пример) Добавление интерактивности к кнопке "Смотреть каталог"
    const catalogButton = document.querySelector('.hero .button--primary');
    catalogButton.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем переход по ссылке (пока нет реального каталога)
        window.location.href = '/catalog.html'; // Перенаправление на страницу каталога
    });

    // 4. Обработчик для кнопки "Донат"
    const donateButton = document.querySelector('.donate-button');
    donateButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Функция доната в разработке.  Здесь будет окно для доната.');
    });

    // ... можно добавить больше JavaScript для других элементов и интеракций
});
