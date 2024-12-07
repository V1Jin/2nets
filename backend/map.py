from PIL import Image
import numpy as np
import requests

def find_midpoint(top_left, bottom_right):
    mid_lat = (top_left[0] + bottom_right[0]) / 2
    mid_lon = (top_left[1] + bottom_right[1]) / 2
    return (mid_lat, mid_lon)

def interpolate(x, y, top_left, top_right, bottom_left, bottom_right, image_width, image_height):
    # Расчет координат широты и долготы
    lat_diff = (bottom_left[0] - top_left[0]) / image_height
    lon_diff = (top_right[1] - top_left[1]) / image_width

    lat = top_left[0] + lat_diff * y
    lon = top_left[1] + lon_diff * x
    return (lat, lon)

def find_bottom_left(top_left, bottom_right, image_width, image_height):
    # Расчет координат широты и долготы для нижнего левого угла
    lat_diff = (bottom_right[0] - top_left[0]) / image_height
    lon_diff = (bottom_right[1] - top_left[1]) / image_width

    bottom_left_lat = top_left[0] + lat_diff * image_height
    bottom_left_lon = top_left[1]

    return (bottom_left_lat, bottom_left_lon)

def get_map():
# Координаты центра карты (широта, долгота)
    #ВЫСОТА ШИРИНА
    top_left = (45.087184, 38.894454)
    bottom_right = (45.006692, 39.102967)
    bottom_left = find_bottom_left(top_left,bottom_right,600,400)
    top_right = (45.087184, 39.102967)
    print (bottom_left)
    # exit()
    center = find_midpoint(top_left,bottom_right)
    print (center)
    # Параметры для статического изображения
    params = {
        'll': f'{center[1]},{center[0]}',  # Долгота, широта
        'z': 12,  # Уровень масштабирования
        'size': '600,400',  # Размер изображения
        'l': 'map',  # Тип карты (map, sat, sat,skl)
    }

    # URL для статического изображения
    static_map_url = 'https://static-maps.yandex.ru/1.x/'

    # Отправка запроса и получение изображения
    response = requests.get(static_map_url, params=params)

    # Сохранение изображения в файл
    with open('map.png', 'wb') as file:
        file.write(response.content)

    print("Изображение карты сохранено как map.png")


def get_cords(image_path):
    # Загрузка изображения
    image = Image.open(image_path)

    # Преобразование изображения в массив numpy в формате RGB
    image_array = np.array(image.convert('RGB'))

    # Цвет, который нужно найти (в формате RGB)
    target_color = np.array([143, 53, 30])  # Цвет #8F351E

    # Поиск координат пикселей с заданным цветом
    mask = np.all(image_array == target_color, axis=-1)
    coordinates = np.column_stack(np.where(mask))

    # Преобразование координат в список кортежей (x, y)
    coordinates_list = list(coordinates)#1 - VERT, 2- GORIZ

    # Координаты углов изображения в реальном мире
    # (широта, долгота)
    # top_left = (45.060000, 38.950000)
    # top_right = (45.060000, 39.020000)
    # bottom_left = (45.010000, 38.950000)
    # bottom_right = (45.010000, 39.020000)

    top_left = (45.087184, 38.894454)
    bottom_right = (45.006692, 39.102967)

    # Функция для интерполяции координат

    # Интерполяция координат и вывод результатов
    real_world_coords = []
    for coord in coordinates_list:
        print ("pixel x = ,", coord[1], "pixel y = ", coord[0])
        real_world_coord = pixel_to_geo(coord[1],coord[0],top_left[0],top_left[1],bottom_right[0],bottom_right[1],600,400)
        # real_world_coord = interpolate(coord[0], coord[1], top_left, top_right, bottom_left)
        real_world_coords.append(real_world_coord)
        print(f"Pixel Coordinate: {coord}, Real World Coordinate: {real_world_coord[0]},{real_world_coord[1]}")

    return real_world_coords

def pixel_to_geo(pixel_x, pixel_y, lat_top, lon_left, lat_bottom, lon_right, width, height):
    # Вычисляем широту
    print ("LAT")
    print (f"{lat_top} + ({pixel_x}/{width}) * ({lat_bottom} - {lat_top})")
    lat_pixel = lat_top - (pixel_x / width) * abs(lat_bottom - lat_top)
    
    # Вычисляем долготу
    print ("LON")
    print (f"{lon_left} + ({pixel_y}/{height}) * ({lon_right} - {lon_left})")
    lon_pixel = lon_left + (pixel_y / height) * abs(lon_right - lon_left)
    
    return lat_pixel, lon_pixel


#45.055924, 39.017781 - искомая 
#45.01554612,38.95110003166667
print (45.087184-45.055924)# нач - искомая
print ((45.087184 - 45.006692) / 600 * 356) #нач - нач




# Пример использования
# get_map()
# real_world_coords = get_cords("map.png")