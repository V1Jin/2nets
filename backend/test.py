from PIL import Image
import numpy as np

def get_pixel_color(image_path, x, y):
    # Загрузка изображения
    image = Image.open(image_path)

    # Преобразование изображения в массив numpy
    image_array = np.array(image)

    # Получение цвета пикселя по его координатам
    pixel_color = image_array[y, x]

    return pixel_color

# Пример использования
image_path = 'map.png'  # Замените на путь к вашему изображению
x, y = 297, 467  # Координаты пикселя

pixel_color = get_pixel_color(image_path, x, y)
print(f"Цвет пикселя с координатами ({x}, {y}): {pixel_color}")
