const mockCurrentJam = [
    {
        level: 9,
        address: "ул. 40-летия Победы - ул. Российская"
    },
    {
        level: 8,
        address: "ул. 40-летия Победы - ул. Российская"
    },
    {
        level: 7,
        address: "ул. 40-летия Победы - ул. Российская"
    },
    {
        level: 7,
        address: "ул. 40-летия Победы - ул. Российская"
    },
    {
        level: 6,
        address: "ул. 40-летия Победы - ул. Российская"
    },
    {
        level: 5,
        address: "ул. 40-летия Победы - ул. Российская"
    },
    {
        level: 4,
        address: "ул. 40-летия Победы - ул. Российская"
    }
];

const mockForecastJam = [
    {
        level: 9,
        address: "ул. 40-летия Победы - ул. Российская",
        hour: 17
    },
    {
        level: 8,
        address: "ул. 40-летия Победы - ул. Российская",
        hour: 17
    },
    {
        level: 7,
        address: "ул. 40-летия Победы - ул. Российская",
        hour: 24
    },
    {
        level: 7,
        address: "ул. 40-летия Победы - ул. Российская",
        hour: 17
    }
];

const mockCameras = [
    {
        address: "ул. Российская, 22/1",
        link: "https://yandex.ru"
    },
    {
        address: "ул. 40-летия Победы, 22/1",
        link: "https://yandex.ru"
    },
    {
        address: "ул. Российская, 22/1",
        link: "https://yandex.ru"
    },
    {
        address: "ул. Московская, 123/4",
        link: "https://yandex.ru"
    },
    {
        address: "ул. 40-летия Победы, 22/1",
        link: "https://yandex.ru"
    },
    {
        address: "ул. Российская, 22/1",
        link: "https://yandex.ru"
    },
    {
        address: "ул. Российская, 22/1",
        link: "https://yandex.ru"
    },
    {
        address: "ул. Российская, 22/1",
        link: "https://yandex.ru"
    }
];

const mockEvents = [
    {
        name: "Кроп Арена",
        address: "ул. Путевая, 5/1",
        time: "сегодня 7 декабря, 20:00"
    },
    {
        name: "Кроп Арена",
        address: "ул. Путевая, 5/1",
        time: "сегодня 7 декабря, 20:00"
    },
    {
        name: "Кроп Арена",
        address: "ул. Путевая, 5/1",
        time: "сегодня 7 декабря, 20:00"
    },
    {
        name: "Кроп Арена",
        address: "ул. Путевая, 5/1",
        time: "сегодня 7 декабря, 20:00"
    },
    {
        name: "Кроп Арена",
        address: "ул. Путевая, 5/1",
        time: "сегодня 7 декабря, 20:00"
    },
    {
        name: "Кроп Арена",
        address: "ул. Путевая, 5/1",
        time: "сегодня 7 декабря, 20:00"
    },
    {
        name: "Кроп Арена",
        address: "ул. Путевая, 5/1",
        time: "сегодня 7 декабря, 20:00"
    }
];

const mockReports = [
    {
        reportMessage: "ДТП на пересечении ул. Красная и ул. Северная",
        time: "07.12.2024 17:14"
    },
    {
        reportMessage: "Затор на пересечении ул. Российская и ул. Зиповская",
        time: "07.12.2024 18:14"
    },
    {
        reportMessage: "ДТП на ул. Мачуги",
        time: "07.12.2024 18:17"
    },
    {
        reportMessage: "Затор на пересечении ул. Российская и ул. Зиповская",
        time: "07.12.2024 18:44"
    },
    {
        reportMessage: "ДТП на пересечении ул. Красная и ул. Северная",
        time: "07.12.2024 19:12"
    }
];

function renderCurrentJam(data) {

    let jamListElement = document.querySelector(".tab__jamlist#current_list");

    data.forEach(field => {

        let indicatorColor = "--yellow";

        if (field.level >= 7)
            indicatorColor = "--red";

        jamListElement.innerHTML += 
        `
            <div class="tab__jamlist-jam">
                <div class="jam__level">
                    <div class="jam__level-indicator ${indicatorColor}"></div>
                    <div class="jam__level-value">${field.level}</div>
                </div>
                <div class="jam__place">
                    <p>${field.address}</p>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                    </svg>
                </div>
            </div>
        `;
    });
}

function renderForecastJam(data) {

    let forecastListElement = document.querySelector(".tab__jamlist#forecast_list");

    data.forEach(field => {

        let indicatorColor = "--yellow";

        if (field.level >= 7)
            indicatorColor = "--red";

        forecastListElement.innerHTML += 
        `
            <div class="tab__jamlist-jam">
                <div class="jam__level">
                    <div class="jam__level-indicator ${indicatorColor}"></div>
                    <div class="jam__level-value">${field.level}</div>
                </div>
                <div class="jam__place">
                    <p>
                        <span class="jam__place-address">${field.address}</span>
                        <span class="jam__place-time">В промежутке <b
                                class="jam__place-time__value">${field.hour % 24}:00-${(field.hour+1) % 24}:00</b></span>
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                    </svg>
                </div>
            </div>
        `;
    });
}

function renderCameras(data) {
    let camerasList = document.querySelector(".main_tab__camlist");

    data.forEach(field => {

        camerasList.innerHTML += 
        `
            <div class="main_tab__camlist-cam">
                <div class="cam__address">
                    ${field.address}
                </div>
                <a href="${field.link}" class="cam__link">
                    Перейти
                </a>
            </div>
        `;
    });
}

function renderEvents(data) {
    let eventsList = document.querySelector(".main_tab__event_list");

    data.forEach(field => {
        eventsList.innerHTML += 
        `
        <div class="main_tab__event_list-event">
            <div class="event__inner">
                <div class="event__inner-place">${field.name}</div>
                <div class="event__inner-address">
                    <span>${field.address}</span>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path
                                d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152l0 270.8c0 9.8-6 18.6-15.1 22.3L416 503l0-302.6zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6l0 251.4L32.9 502.7C17.1 509 0 497.4 0 480.4L0 209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77l0 249.3L192 449.4 192 255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div class="event__inner-date">${field.time}</div>
            </div>
        </div>
        `
    });
}

function renderReports(data) {
    let reportsList = document.querySelector(".tab__warnings-inner");

    data.forEach(field => {

        reportsList.innerHTML +=
        `
        <div class="tab__warnings-message">
            <div class="message__text">
                <span class="message__text-address">${field.reportMessage}</span>
            </div>
            <div class="message__date">
                ${field.time}
            </div>
        </div>
        `;
    });
}

renderCurrentJam(mockCurrentJam);
renderForecastJam(mockForecastJam);
renderCameras(mockCameras);
renderEvents(mockEvents);
renderReports(mockReports);