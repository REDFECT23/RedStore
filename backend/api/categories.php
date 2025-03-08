<?php
header('Content-Type: application/json');

// **ВАЖНО: Замените на URL к вашему файлу categories.json на GitHub**
$githubCategoriesDataUrl = 'https://raw.githubusercontent.com/ВАШ_ЮЗЕРНЕЙМ/ВАШ_РЕПОЗИТОРИЙ/main/data/categories.json';

$categoriesJson = @file_get_contents($githubCategoriesDataUrl); // Используем @ для подавления предупреждений, если файл не найден

if ($categoriesJson === false) {
    // Обработка ошибки, если не удалось загрузить данные с GitHub
    http_response_code(500); // Internal Server Error
    echo json_encode(['error' => 'Не удалось загрузить данные о категориях с GitHub. Проверьте URL и доступность файла.']);
    exit;
}

$categories = json_decode($categoriesJson, true);

if ($categories === null && json_last_error() !== JSON_ERROR_NONE) {
    // Обработка ошибки JSON декодирования
    http_response_code(500);
    echo json_encode(['error' => 'Ошибка декодирования JSON данных о категориях. Проверьте формат файла categories.json.']);
    exit;
}

echo json_encode($categories);
