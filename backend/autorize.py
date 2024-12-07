import sqlite3

# Подключение к базе данных (файл базы создается автоматически, если его нет)
conn = sqlite3.connect("users.db")
cursor = conn.cursor()

# Создание таблицы
cursor.execute("""
CREATE TABLE IF NOT EXISTS reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    login TEXT NOT NULL,
    password TEXT NOT NULL
)
""")

# Сохранение изменений и закрытие соединения
conn.commit()
conn.close()

def autorize(user_data):

    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()

    # Выполняем добавление данных
    cursor.execute("""
    SELECT *
    from users
    WHERE login = ? AND password = ?
    LIMIT 1
    """, (user_data["login"], user_data["password"]))

    user = cursor.fetchone()
    conn.close()

    if user: return True