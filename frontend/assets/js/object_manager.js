var myMap;
console.log("Hi")


const MockCameras = {
    "type": "FeatureCollection",
    "features": [
        {"type": "Feature", "id": 0, "geometry": {"type": "Point", "coordinates": [45.037171, 38.975151]}, "properties": {balloonContentHeader: "<span>Володи Головатого/Красная</span>", balloonContentBody: "<div><video src='assets/src/images/video.mp4' width='300px' loop='true'></video></div>",balloonContentFooter: "<span style='color:red'>Про</span>свет", clusterCaption: "<strong><s>Еще</s> одна</strong> метка", hintContent: "<strong>Володи Головатого/Красная</strong>"}},
        {"type": "Feature", "id": 1, "geometry": {"type": "Point", "coordinates": [45.040502, 38.974253]}, "properties": {balloonContentHeader: "<strong>Восточно-Кругликовская у стадиона</strong>", balloonContentBody: "<div><video src='assets/src/images/video.mp4' width='300px' autoplay='true' loop='true'></video></div>", balloonContentFooter: "<span style='color:red'>Про</span>свет", clusterCaption: "<strong><s>Еще</s> одна</strong> метка", hintContent: "<strong>Восточно-Кругликовская у стадиона</strong>"}},
        {"type": "Feature", "id": 2, "geometry": {"type": "Point", "coordinates": [45.019666, 39.067848]}, "properties": {balloonContentHeader: "<strong>Лента/Западный обход</strong>", balloonContentBody: "<div><video src='assets/src/images/video.mp4' width='300px' autoplay='true' loop='true'></video></div>", balloonContentFooter: "<span style='color:red'>Про</span>свет", clusterCaption: "<strong><s>Еще</s> одна</strong> метка", hintContent: "<strong>Лента/Западный обход</strong>"}},
        {"type": "Feature", "id": 3, "geometry": {"type": "Point", "coordinates": [45.015524, 38.959754]}, "properties": {balloonContentHeader: "<strong>Светлая/Родные просторы</strong>", balloonContentBody: "<div><video src='assets/src/images/video.mp4' width='300px' autoplay='true' loop='true'></video></div>", balloonContentFooter: "<span style='color:red'>Про</span>свет", clusterCaption: "<strong><s>Еще</s> одна</strong> метка", hintContent: "<strong>Светлая/Родные просторы</strong>"}},
        {"type": "Feature", "id": 3, "geometry": {"type": "Point", "coordinates": [45.034814227896064,39.01694053875014]}, "properties": {balloonContentHeader: "<strong>Светлая/Родные просторы</strong>", balloonContentBody: "<div><video src='assets/src/images/video.mp4' width='300px' autoplay='true' loop='true'></video></div>", balloonContentFooter: "<span style='color:red'>Про</span>свет", clusterCaption: "<strong><s>Еще</s> одна</strong> метка", hintContent: "<strong>Светлая/Родные просторы</strong>"}},
        {"type": "Feature", "id": 3, "geometry": {"type": "Point", "coordinates": [45.043279208987094,38.95789675896423]}, "properties": {balloonContentHeader: "<strong>Светлая/Родные просторы</strong>", balloonContentBody: "<div><video src='assets/src/images/video.mp4' width='300px' autoplay='true' loop='true'></video></div>", balloonContentFooter: "<span style='color:red'>Про</span>свет", clusterCaption: "<strong><s>Еще</s> одна</strong> метка", hintContent: "<strong>Светлая/Родные просторы</strong>"}},
        {"type": "Feature", "id": 3, "geometry": {"type": "Point", "coordinates": [45.04796443903998,38.978324462821654]}, "properties": {balloonContentHeader: "<strong>Светлая/Родные просторы</strong>", balloonContentBody: "<div><video src='assets/src/images/video.mp4' width='300px' autoplay='true' loop='true'></video></div>", balloonContentFooter: "<span style='color:red'>Про</span>свет", clusterCaption: "<strong><s>Еще</s> одна</strong> метка", hintContent: "<strong>Светлая/Родные просторы</strong>"}},
    
        {"type": "Feature", "id": 3, "geometry": {"type": "Point", "coordinates": [45.033709270705394,38.99925348742302]}, "properties": {balloonContentHeader: "<strong>Светлая/Родные просторы</strong>", balloonContentBody: "<div><video src='assets/src/images/video.mp4' width='300px' autoplay='true' loop='true'></video></div>", balloonContentFooter: "<span style='color:red'>Про</span>свет", clusterCaption: "<strong><s>Еще</s> одна</strong> метка", hintContent: "<strong>Светлая/Родные просторы</strong>"}},
        {"type": "Feature", "id": 3, "geometry": {"type": "Point", "coordinates": [45.043279208987094,38.95789675896423]}, "properties": {balloonContentHeader: "<strong>Светлая/Родные просторы</strong>", balloonContentBody: "<div><video src='assets/src/images/video.mp4' width='300px' autoplay='true' loop='true'></video></div>", balloonContentFooter: "<span style='color:red'>Про</span>свет", clusterCaption: "<strong><s>Еще</s> одна</strong> метка", hintContent: "<strong>Светлая/Родные просторы</strong>"}},
        {"type": "Feature", "id": 3, "geometry": {"type": "Point", "coordinates": [45.05051372458458,38.95957209144736]}, "properties": {balloonContentHeader: "<strong>Светлая/Родные просторы</strong>", balloonContentBody: "<div><video src='assets/src/images/video.mp4' width='300px' autoplay='true' loop='true'></video></div>", balloonContentFooter: "<span style='color:red'>Про</span>свет", clusterCaption: "<strong><s>Еще</s> одна</strong> метка", hintContent: "<strong>Светлая/Родные просторы</strong>"}},
        {"type": "Feature", "id": 3, "geometry": {"type": "Point", "coordinates": [45.06182034215802,38.964161927251666]}, "properties": {balloonContentHeader: "<strong>Светлая/Родные просторы</strong>", balloonContentBody: "<div><video src='assets/src/images/video.mp4' width='300px' autoplay='true' loop='true'></video></div>", balloonContentFooter: "<span style='color:red'>Про</span>свет", clusterCaption: "<strong><s>Еще</s> одна</strong> метка", hintContent: "<strong>Светлая/Родные просторы</strong>"}},]
    
}

document.addEventListener("DOMContentLoaded", function LoadContent(){
    fetch("http://localhost:5000/api/cameras")
    .then(response => {
        if (response.ok){
            console.log("Cameras content loaded")
            return response.json()
        }
        else{
            console.log("Cameras content ERROR")
        }
    })
    .then(data => {
        ymaps.ready(() => {
            place_marks(data)
        })
    })
})


// ymaps.ready(() => {
//     place_marks(MockCameras)
// })

function place_marks(data){
    myMap = new ymaps.Map(
        "map",
        {
            center: [45.03547, 38.975313],
            zoom: 12,
            // controls: ['smallMapDefaultSet']
        },
        {
            restrictMapArea: [
                [45.16487943674944,38.89828819979351],
                [44.97414329949797,39.14273400057474]],
            searchControlProvider: "yandex#search",
        },
    

    );

    let actualProvider = new ymaps.traffic.provider.Actual({}, { infoLayerShown: true });

    actualProvider.setMap(myMap);

    myMap.options.set("scrollZoomSpeed",2.7);

    data = data["features"]
    for (let key of data ){

        
        let MyPlacem = new ymaps.Placemark(key["geometry"]["coordinates"], key["properties"]
        , {
            // preset: 'islands#circleIcon',
            // // iconLayout: "default#image",
            // // iconImageHref: "frontend/assets/src/images/video-camera.png",
            // // iconImageSize: [20,20],
            // // Отключаем кнопку закрытия балуна.
            // balloonCloseButton: false,
            //  // Балун будем открывать и закрывать кликом по иконке метки.
            // hideIconOnBalloonOpen: false

            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://cdn-icons-png.flaticon.com/512/14629/14629021.png',
            // Размеры метки.
            iconImageSize: [30, 30],
        });
        myMap.geoObjects.add(MyPlacem);

        MyPlacem.events
        .add('mouseenter', function (e) {
            // Ссылку на объект, вызвавший событие,
            // можно получить из поля 'target'.
            e.get('target').options.set('iconImageSize', [40,40]);
            e.get('target').options.set('iconOffset', [-10,-10]);
        })
        .add('mouseleave', function (e) {
            e.get('target').options.set('iconImageSize', [30,30]);
            e.get('target').options.set('iconOffset', [0,0]);
        });
        // MyPlacem.addEventListener("mouseenter", e => {
        //     console.log(e.target)
        // })

    }
}

// setTimeout()
function move_map_to(arr){
    myMap.setCenter(arr,18)
}


function make_move_cam(){
    cameras_moving = document.querySelectorAll(".cam__link")
    Array.from(cameras_moving).forEach(el => {
        el.addEventListener("click",e=>{
            move_map_to(JSON.parse(e.target.classList[1]).map(Number))
            btn = document.querySelector(".map__switch-button")
            document.querySelector(".map__switch-thumb").style.left = "0.5rem";
            document.querySelector(".map__switch-button.--active").classList.remove("--active");
            btn.classList.add("--active");
            document.querySelector(".tabs_wrapper__tab-inner.--active").classList.remove("--active");
            document.querySelector(".tabs_wrapper__tab-inner[data-tab='" + 1 + "']").classList.add("--active");
            // myMap.setCenter(e.target.classList[1],18,{})
            // // cord_list = e.target.ClassList[1]
            // console.log(e.target)
            // console.log(e.target.classList[1])
        })
    })
}
