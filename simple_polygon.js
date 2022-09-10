let map;

let polygon;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 41.89022, lng: 12.49223 },
        zoom: 19
    });

  

    polygon = new google.maps.Polygon({
        paths: rectCoords,
        strokeColor: "#5C06FF",
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: "#5C06FF",
        fillOpacity: 0.35
    });

    polygon.setMap(map);
}

window.initMap = initMap;
