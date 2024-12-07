import sqlite3

# Подключение к базе данных (файл базы создается автоматически, если его нет)
conn = sqlite3.connect("reports.db")
cursor = conn.cursor()

# Создание таблицы
cursor.execute("""
CREATE TABLE IF NOT EXISTS reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    address TEXT NOT NULL,
    trouble TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
""")

# Сохранение изменений и закрытие соединения
conn.commit()
conn.close()

def add_report(data):
 
    # Проверяем, что словарь содержит нужные ключи
    required_keys = {"address", "trouble"}
    if not required_keys.issubset(data.keys()):
        raise ValueError(f"В словаре должны быть ключи: {', '.join(required_keys)}")

    # Подключаемся к базе данных
    conn = sqlite3.connect("reports.db")
    cursor = conn.cursor()

    # Выполняем добавление данных
    cursor.execute("""
    INSERT INTO reports (address, trouble)
    VALUES (?, ?)
    """, (data["address"], data["trouble"]))

    # Сохраняем изменения и закрываем соединение
    conn.commit()
    conn.close()


import sqlite3

def get_stats():

    conn = sqlite3.connect("reports.db")
    cursor = conn.cursor()

    query = """
    WITH FilteredReports AS (
        SELECT
            address,
            strftime('%H', created_at) AS hour,
            COUNT(*) AS count
        FROM reports
        WHERE strftime('%w', created_at) = strftime('%w', 'now') -- Текущий день недели
        GROUP BY address, hour
    ),
    MaxReports AS (
        SELECT
            address,
            hour,
            MAX(count) AS max_count
        FROM FilteredReports
        GROUP BY address
    )
    SELECT address, hour, max_count
    FROM MaxReports;
    """

    cursor.execute(query)
    results = cursor.fetchall()
    stats = {row[0]: row[1] for row in results}
    conn.close()

    return stats