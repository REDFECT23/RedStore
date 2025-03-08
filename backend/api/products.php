<?php
header('Content-Type: application/json');

// **ВАЖНО: Замените на URL к вашему файлу products.json на GitHub**
$githubProductsDataUrl = 'https://raw.githubusercontent.com/ВАШ_ЮЗЕРНЕЙМ/ВАШ_РЕПОЗИТОРИЙ/main/data/products.json';

$productsJson = @file_get_contents($githubProductsDataUrl); // Используем @ для подавления предупреждений

if ($productsJson === false) {
    // Обработка ошибки загрузки с GitHub
    http_response_code(500);
    echo json_encode(['error' => 'Не удалось загрузить данные о товарах с GitHub. Проверьте URL и доступность файла.']);
    exit;
}

$products = json_decode($productsJson, true);

if ($products === null && json_last_error() !== JSON_ERROR_NONE) {
    // Обработка ошибки JSON
    http_response_code(500);
    echo json_encode(['error' => 'Ошибка декодирования JSON данных о товарах. Проверьте формат файла products.json.']);
    exit;
}

echo json_encode($products);
