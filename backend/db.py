import sqlite3
from datetime import datetime

# Подключение к базе данных (файл базы создается автоматически, если его нет)
conn = sqlite3.connect("reports.db")
cursor = conn.cursor()

# Создание таблицы
cursor.execute("""
CREATE TABLE IF NOT EXISTS reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    address TEXT NOT NULL,
    trouble TEXT NOT NULL,
    created_at DATEcreated_at DEFAULT CURRENT_created_atSTAMP
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


    conn = sqlite3.connect("reports.db")
    cursor = conn.cursor()


    cursor.execute("""
    INSERT INTO reports (address, trouble)
    VALUES (?, ?)
    """, (data["address"], data["trouble"]))

    conn.commit()
    conn.close()


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



def set_appl(data):



    conn = sqlite3.connect("appls.db")
    cursor = conn.cursor()


    cursor.execute("""
    CREATE TABLE IF NOT EXISTS appls (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        app_text TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
    """)


    cursor.execute("""
    INSERT INTO appls (app_text, created_at)
    VALUES (?, ?)
    """, (data["text"], data["created_at"]))

    conn.commit()
    conn.close()



def get_appl():
    today = datetime.now().strftime('%Y-%m-%d')


    conn = sqlite3.connect("appls.db")
    cursor = conn.cursor()

    query = """
    SELECT *
    FROM appls
    WHERE DATE(created_at) = ?
    """

    cursor.execute(query, (today,))
    results = cursor.fetchall()

    stats = {row[1]: row[2] for row in results}

    conn.close()

    return stats

# print (get_stats())
# print (get_appl())