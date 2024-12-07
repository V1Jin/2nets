import requests
import json
from bs4 import BeautifulSoup
from datetime import datetime,timedelta


def get_response():
    try:
        time = datetime.now().date()
        # time = time+timedelta(days=1)
        sport_url = f"https://afisha.yandex.ru/krasnodar?utm_source=direct_search&utm_medium=paid_performance&utm_campaign=113627793%7CMSCAMP-60_%5BAF-PT%5D_%7BWS%3AS%7D_RU-35_goal-REV_Category-Афиша-Plus&utm_term=---autotargeting&utm_content=INTid%7C0100000052792029241_52792029241%7Ccid%7C113627793%7Cgid%7C5481724465%7Caid%7C16420617886%7Cpos%7Cpremium1%7Csrc%7Csearch_none%7Cdvc%7Cdesktop%7Cevid%7C0%7Cretid%7C0&yclid=3715277752606654463&rubric=sport&period=1&date={time}"
        concerts_url = f"https://afisha.yandex.ru/krasnodar/selections/concert-hot?date={time}&period=1"

        headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
        'Accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9',
        'Connection': 'keep-alive',
        # 'Content-Type': 'application/json',  # Если отправляете JSON данные
        # 'Authorization': 'Bearer YOUR_ACCESS_TOKEN'  # Если требуется авторизация
        }

        response = requests.get(concerts_url, headers=headers)
        soup = BeautifulSoup(response.content, 'html.parser')
        events = soup.find_all("div", class_="event events-list__item yandex-sans")

        new_mass = []
        for i in range(len(events)):
            new_mass.append(make_jsons(events[i]))
        
        response = requests.get(sport_url, headers=headers)
        soup = BeautifulSoup(response.content, 'html.parser')
        events = soup.find_all("div", class_="event events-list__item yandex-sans")
        for i in range(len(events)):
            new_mass.append(make_jsons(events[i]))
        print ("Itog events = ", new_mass)
        return new_mass
    except Exception as ex: print ("get response ERROR = ", )



def make_jsons(event):
    content = json.loads(event.find("div")["data-bem"])["event-card-react"]["props"]
    newDict = {
    "name": content["title"],
    "date": content["additionalInfo"],
    "place": content["place"]["title"],
    "address": content["place"]["address"]
    }
    return newDict

# get_response()
# with open("new.json","w",encoding="utf-8") as file:
#     json.dump(events[0].find("div")["data-bem"],file,ensure_ascii=False,indent=4)

#title
#additionalInfo
#place["title"]
#address