import sqlite3
import random
from datetime import datetime, timedelta

def generate_test_data(db_name="reports.db", num_records=100):
    """
    Генерирует тестовые записи и добавляет их в таблицу reports.
    :param db_name: Имя базы данных.
    :param num_records: Количество записей для генерации.
    """
    # Подключение к базе данных
    conn = sqlite3.connect(db_name)
    cursor = conn.cursor()

    # Проверка существования таблицы
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS reports (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        address TEXT NOT NULL,
        trouble TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
    """)

    # Примеры адресов для города Краснодар
    addresses = [
        "Улица Красная",
        "Улица Северная",
        "Улица Буденного",
        "Проспект Чекистов",
        "Улица Гагарина",
        "Улица Вишняковой",
        "Улица Дзержинского",
        "Улица Ленина",
        "Улица Тимирязева",
        "Улица Октябрьская",
        "Улица Ставропольская",
        "Улица Трудовая",
        "Улица Комсомольская",
        "Улица Кубанская",
        "Проспект Пушкина",
        "Улица Шоссейная",
        "Улица Солнечная",
        "Улица Зиповская",
        "Улица Кирова",
        "Улица Пролетарская"
    ]
    
    troubles = [
        "Не работает освещение",
        "Повреждение дорожного покрытия",
        "Сломана лавочка",
        "Засорение ливневой канализации",
        "Обрыв линии электропередач",
        "Повреждение фасада здания"
    ]

    # Генерация записей
    records = []
    for _ in range(num_records):
        address = random.choice(addresses)
        trouble = random.choice(troubles)
        # Генерация случайной даты в пределах последнего месяца
        random_days_ago = random.randint(0, 30)
        random_time_offset = random.randint(0, 86400)  # Секунды в дне
        created_at = datetime.now() - timedelta(days=random_days_ago, seconds=random_time_offset)
        created_at_str = created_at.strftime('%Y-%m-%d %H:%M:%S')
        records.append((address, trouble, created_at_str))

    # Вставка данных в базу
    cursor.executemany("""
    INSERT INTO reports (address, trouble, created_at)
    VALUES (?, ?, ?)
    """, records)

    # Сохранение изменений и закрытие соединения
    conn.commit()
    conn.close()

    print(f"Сгенерировано {num_records} записей для таблицы reports.")

# Запуск генерации данных
generate_test_data()