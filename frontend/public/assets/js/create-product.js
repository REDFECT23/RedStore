document.addEventListener('DOMContentLoaded', () => {
    const createProductForm = document.getElementById('create-product-form');
    const categorySelect = document.getElementById('product-category');
    const promotionEnabledCheckbox = document.getElementById('product-promotion-enabled');
    const promotionPriceInput = document.getElementById('product-promotion-price');
    const promotionStartDateInput = document.getElementById('product-promotion-start-date');
    const promotionEndDateInput = document.getElementById('product-promotion-end-date');
    const productImageInput = document.getElementById('product-image');
    const imagePreviewContainer = document.getElementById('image-preview-container');


    // 2. Включение/отключение полей акции
    promotionEnabledCheckbox.addEventListener('change', function() {
        promotionPriceInput.disabled = !this.checked;
        promotionStartDateInput.disabled = !this.checked;
        promotionEndDateInput.disabled = !this.checked;
        if (!this.checked) {
            promotionPriceInput.value = ''; // Очищаем значения при отключении акции
            promotionStartDateInput.value = '';
            promotionEndDateInput.value = '';
        }
    });


    // 3. Предварительный просмотр изображения
    productImageInput.addEventListener('change', function() {
        imagePreviewContainer.innerHTML = ''; // Очищаем предыдущий превью

        if (this.files && this.files[0]) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                imagePreviewContainer.appendChild(img);
            }

            reader.readAsDataURL(this.files[0]); // Читаем данные файла как Data URL
        }
    });


    // 4. Обработка отправки формы
    createProductForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // Предотвращаем стандартную отправку формы

        const formData = new FormData(this); // Собираем данные формы

        // Для демонстрации - выведем данные в консоль в формате JSON
        const productData = {};
        formData.forEach((value, key) => {
            productData[key] = value;
        });
        console.log('Данные нового товара (JSON):', JSON.stringify(productData, null, 2));

        alert('Форма отправлена. Данные товара выведены в консоль (F12). \n\nВ реальном проекте здесь будет отправка данных на backend.');

        // В реальном проекте здесь будет код для отправки formData на backend API (через fetch)
        // и обработка ответа от сервера (успех/ошибка)
    });
});
