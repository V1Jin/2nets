import sqlite3

# Подключение к базе данных (файл базы создается автоматически, если его нет)
conn = sqlite3.connect("2nets/backend/reports.db")
cursor = conn.cursor()

# Создание таблицы
cursor.execute("""
CREATE TABLE IF NOT EXISTS reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    adress TEXT NOT NULL,
    trouble TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
""")

# Сохранение изменений и закрытие соединения
conn.commit()
conn.close()

def add_report(data):
 
    # Проверяем, что словарь содержит нужные ключи
    required_keys = {"adress", "trouble"}
    if not required_keys.issubset(data.keys()):
        raise ValueError(f"В словаре должны быть ключи: {', '.join(required_keys)}")

    # Подключаемся к базе данных
    conn = sqlite3.connect("reports.db")
    cursor = conn.cursor()

    # Выполняем добавление данных
    cursor.execute("""
    INSERT INTO reports (adress, trouble)
    VALUES (?, ?)
    """, (data["adress"], data["trouble"]))

    # Сохраняем изменения и закрываем соединение
    conn.commit()
    conn.close()

"""
datasheet = {
    "adress": "Северная 408",
    "trouble": "ДТП"
}

"""