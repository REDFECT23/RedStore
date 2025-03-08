document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.getElementById('catalog-products-grid');
    const loadingMessage = productsGrid.querySelector('.loading-message'); // Находим сообщение о загрузке

    async function loadProducts() {
        try {
            const response = await fetch('/backend/api/products.php'); // Запрос к API за товарами
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const productsData = await response.json();

            productsGrid.innerHTML = ''; // Очищаем контейнер от сообщения о загрузке и предыдущих товаров (если были ошибки)

            if (productsData.length === 0) {
                productsGrid.innerHTML = '<div class="empty-catalog">В каталоге пока нет товаров.</div>'; // Сообщение, если товаров нет
                return;
            }

            productsData.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <a href="#" class="product-card__link">
                        <img src="frontend/public${product.image}" alt="${product.name}" class="product-card__image">
                        <h3 class="product-card__title">${product.name}</h3>
                        <p class="product-card__price">${product.price}</p>
                    </a>
                `;
                productsGrid.appendChild(productCard);
            });

        } catch (error) {
            console.error('Ошибка загрузки товаров для каталога:', error);
            productsGrid.innerHTML = '<div class="error-message">Не удалось загрузить товары. Попробуйте обновить страницу позже.</div>'; // Сообщение об ошибке
        } finally {
            if (loadingMessage) {
                loadingMessage.remove(); // Убираем сообщение о загрузке в любом случае (успех или ошибка)
            }
        }
    }

    loadProducts();
});
